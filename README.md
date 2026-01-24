# Django Portfolio

A modern portfolio website built with Django and Tailwind CSS.

## Features

- Clean, modern design with dark theme
- Fully responsive layout
- Admin panel for managing portfolio content
- RESTful API for data
- Production-ready configuration
- Easy deployment to Vercel or Heroku

## Quick Start

### Prerequisites

- Python 3.9+
- pip or poetry

### Installation

1. **Clone and setup virtual environment:**
```bash
python -m venv venv
venv\Scripts\activate  # On Windows
source venv/bin/activate  # On macOS/Linux
```

2. **Install dependencies:**
```bash
pip install -r requirements.txt
```

3. **Run migrations:**
```bash
python manage.py migrate
```

4. **Create superuser:**
```bash
python manage.py createsuperuser
```

5. **Run development server:**
```bash
python manage.py runserver
```

Visit `http://localhost:8000/` to see your portfolio.

## Project Structure

```
portfolio-django/
├── config/              # Django project configuration
│   ├── settings.py     # Project settings
│   ├── urls.py         # URL routing
│   ├── wsgi.py         # WSGI application
│   └── asgi.py         # ASGI application
├── portfolio/           # Main Django app
│   ├── models.py       # Database models
│   ├── views.py        # Views/logic
│   ├── admin.py        # Admin configuration
│   └── urls.py         # App URLs
├── templates/           # HTML templates
├── static/              # CSS, JS, images
├── manage.py           # Django CLI
├── requirements.txt    # Python dependencies
└── README.md          # This file
```

## Models

### Skill
- name: Skill name
- category: Skill category (Frontend, Backend, etc.)
- icon: Font Awesome icon class
- level: Proficiency 0-100

### Project
- title: Project title
- description: Project description
- image_url: Project image URL
- github_url: Link to GitHub repo
- live_url: Link to live project
- technologies: Comma-separated tech stack
- featured: Featured project flag
- created_at: Creation date

### Experience
- title: Job title
- company: Company name
- description: Job description
- start_date: Start date
- end_date: End date (optional)
- is_current: Currently employed flag

### SocialLink
- name: Social platform name
- url: Profile URL
- icon: Font Awesome icon class

## Admin Panel

Access the admin panel at `/admin/` to manage your portfolio content.

## Deployment

### Vercel

1. **Create vercel.json:**
```json
{
  "build": {
    "env": {
      "DJANGO_SETTINGS_MODULE": "config.settings"
    }
  },
  "functions": {
    "api/wsgi.py": {
      "memory": 3008,
      "maxDuration": 30
    }
  },
  "routes": [
    {
      "src": "/(.*)",
      "dest": "api/wsgi.py"
    }
  ]
}
```

2. **Add to requirements.txt:**
```
vercel
```

3. **Deploy:**
```bash
vercel --prod
```

### Heroku

1. **Create Procfile:**
```
web: gunicorn config.wsgi
```

2. **Create runtime.txt:**
```
python-3.11.8
```

3. **Deploy:**
```bash
git push heroku main
```

## Environment Variables

Create a `.env` file in the root directory:

```
DEBUG=False
SECRET_KEY=your-secret-key-here
ALLOWED_HOSTS=yourdomain.com,www.yourdomain.com
```

## API Endpoints

- `GET /` - Portfolio homepage
- `GET /api/data/` - Get all portfolio data

## Customization

1. Update content in `constants.tsx` equivalent or Django models
2. Modify `templates/index.html` for layout changes
3. Update `static/css/style.css` for styling
4. Add new sections in `templates/index.html` and `portfolio/views.py`

## Performance Optimization

- WhiteNoise for static file serving
- Database query optimization with select_related/prefetch_related
- CSS and JS minification
- Static file caching headers

## Security

- CSRF protection enabled
- XFrame options configured
- Secure cookies for production
- Secret key management via environment variables
- Input validation on all forms

## Contributing

Feel free to fork this project and customize it for your needs.

## License

MIT License - feel free to use this for your portfolio.
