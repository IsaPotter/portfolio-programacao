import sys
import os
from pathlib import Path

# Adicionar o caminho do projeto
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

# Configurar Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from config.wsgi import application

def handler(request):
    return application(request)

