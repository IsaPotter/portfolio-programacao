import requests
from django.core.management.base import BaseCommand
from django.utils.dateparse import parse_date
from portfolio.models import Project

class Command(BaseCommand):
    help = 'Importa projetos do GitHub para o banco de dados'

    def add_arguments(self, parser):
        parser.add_argument('username', type=str, help='Seu nome de usuário do GitHub')

    def handle(self, *args, **options):
        username = options['username']
        url = f'https://api.github.com/users/{username}/repos?sort=updated&per_page=100'
        
        self.stdout.write(f'Buscando projetos de {username}...')
        
        response = requests.get(url)
        
        if response.status_code != 200:
            self.stdout.write(self.style.ERROR('Erro ao conectar com o GitHub'))
            return

        repos = response.json()
        count = 0

        for repo in repos:
            # Pula se for um fork (cópia de outro projeto)
            if repo['fork']:
                continue
            
            # Tenta pegar a linguagem principal ou define como 'Code'
            tech = repo['language'] if repo['language'] else 'Code'
            
            # Se houver tópicos, usa eles como tecnologias
            if repo.get('topics'):
                tech = ", ".join(repo['topics'])

            # Define uma imagem padrão (já que a API básica não retorna imagem de capa)
            default_image = "https://via.placeholder.com/400x300?text=GitHub+Project"

            # Cria ou atualiza o projeto baseado na URL do GitHub
            project, created = Project.objects.update_or_create(
                github_url=repo['html_url'],
                defaults={
                    'title': repo['name'].replace('-', ' ').title(),
                    'description': repo['description'] or 'Sem descrição fornecida.',
                    'live_url': repo['homepage'] or '',
                    'technologies': tech,
                    'created_at': parse_date(repo['created_at'][:10]),
                    # Mantém a imagem existente se já tiver, senão usa a padrão
                    'image_url': default_image if not Project.objects.filter(github_url=repo['html_url']).exists() else Project.objects.get(github_url=repo['html_url']).image_url
                }
            )

            action = "Criado" if created else "Atualizado"
            self.stdout.write(self.style.SUCCESS(f'{action}: {project.title}'))
            count += 1

        self.stdout.write(self.style.SUCCESS(f'Processo finalizado! {count} projetos processados.'))