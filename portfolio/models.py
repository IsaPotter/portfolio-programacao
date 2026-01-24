"""
Portfolio app models.
"""
from django.db import models


class Skill(models.Model):
    """Skill model for portfolio."""
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=50)
    icon = models.CharField(max_length=100, help_text="Font Awesome icon class")
    level = models.IntegerField(default=80, help_text="Proficiency level 0-100")
    
    class Meta:
        ordering = ['category', 'name']
    
    def __str__(self):
        return f"{self.name} ({self.category})"


class Project(models.Model):
    """Project model for portfolio."""
    title = models.CharField(max_length=200)
    description = models.TextField()
    image_url = models.URLField()
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    technologies = models.CharField(max_length=500, help_text="Comma-separated technologies")
    featured = models.BooleanField(default=False)
    created_at = models.DateField()
    
    class Meta:
        ordering = ['-created_at']
    
    def __str__(self):
        return self.title

    @property
    def technologies_list(self):
        if self.technologies:
            return [tech.strip() for tech in self.technologies.split(',')]
        return []

class Experience(models.Model):
    """Experience model for portfolio."""
    title = models.CharField(max_length=200)
    company = models.CharField(max_length=200)
    description = models.TextField()
    start_date = models.DateField()
    end_date = models.DateField(null=True, blank=True)
    is_current = models.BooleanField(default=False)
    
    class Meta:
        ordering = ['-start_date']
    
    def __str__(self):
        return f"{self.title} at {self.company}"


class SocialLink(models.Model):
    """Social media links."""
    name = models.CharField(max_length=100)
    url = models.URLField()
    icon = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name
