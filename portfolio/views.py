"""
Portfolio app views.
"""
from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
from .models import Skill, Project, Experience, SocialLink


def index(request):
    """Render portfolio index page."""
    # Agrupar habilidades por categoria
    skills = Skill.objects.all()
    skills_by_category = {}
    for skill in skills:
        if skill.category not in skills_by_category:
            skills_by_category[skill.category] = []
        skills_by_category[skill.category].append(skill)

    context = {
        'title': 'Portfolio',
        'profile_name': 'Isabela Paiva Novais',
        'profile_title': 'Full Stack Developer',
        'skills_by_category': skills_by_category,
        'projects': Project.objects.filter(featured=True).order_by('-created_at'),
        'experiences': Experience.objects.all().order_by('-start_date'),
        'social_links': SocialLink.objects.all(),
    }
    return render(request, 'index.html', context)


@require_http_methods(["GET"])
def get_portfolio_data(request):
    """API endpoint to get portfolio data."""
    data = {
        'skills': list(Skill.objects.values()),
        'projects': list(Project.objects.values()),
        'experience': list(Experience.objects.values()),
        'social': list(SocialLink.objects.values()),
    }
    
    # This can be extended to pull from database
    # For now, return structured data
    
    return JsonResponse(data)
