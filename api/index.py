from config.wsgi import application

def handler(request):
    return application(request)
