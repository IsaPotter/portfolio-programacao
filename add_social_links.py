import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from portfolio.models import SocialLink

# Limpar social links antigos
SocialLink.objects.all().delete()

# Adicionar novos links
social_links = [
    {
        'name': 'LinkedIn',
        'url': 'https://linkedin.com/in/isabelapaivanovais7',
        'icon': 'fab fa-linkedin'
    },
    {
        'name': 'GitHub',
        'url': 'https://github.com/IsaPotter',
        'icon': 'fab fa-github'
    },
    {
        'name': 'Email',
        'url': 'mailto:i.paiva.novais@gmail.com',
        'icon': 'fas fa-envelope'
    }
]

for link in social_links:
    SocialLink.objects.create(**link)
    print(f'✓ Adicionado: {link["name"]}')

print('\nTodos os links sociais foram adicionados com sucesso!')

def add_github_projects():
    projects = [
        {'name': 'Projeto 1', 'url': 'https://github.com/usuario/projeto1'},
        {'name': 'Projeto 2', 'url': 'https://github.com/usuario/projeto2'},
        {'name': 'Projeto 3', 'url': 'https://github.com/usuario/projeto3'},
    ]
    return projects
