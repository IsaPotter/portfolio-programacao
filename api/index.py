import os
import sys
from pathlib import Path

# Add project to path
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))

# Configure Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

try:
    import django
    django.setup()
    from django.core.wsgi import get_wsgi_application
    application = get_wsgi_application()
except Exception as e:
    # Retornar erro para debug
    def application(environ, start_response):
        status = '500 Internal Server Error'
        headers = [('Content-Type', 'text/plain')]
        start_response(status, headers)
        return [str(e).encode()]

def handler(request):
    return application(request)



