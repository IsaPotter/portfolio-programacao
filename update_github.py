import os
import django

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')
django.setup()

from portfolio.models import SocialLink

# Atualizar o link do GitHub
github = SocialLink.objects.get(name='GitHub')
github.url = 'https://github.com/IsaPotter'
github.save()

print('✓ GitHub link atualizado para: https://github.com/IsaPotter')
