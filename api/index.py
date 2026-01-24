import os
import sys
from pathlib import Path

# Add project to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

# Configure Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

import django
django.setup()

from django.core.wsgi import get_wsgi_application
from django.http import HttpResponse

app = get_wsgi_application()

def handler(request):
    return app(request)


