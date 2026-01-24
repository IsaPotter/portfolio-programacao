@echo off
cd /d "%~dp0"
call venv\Scripts\activate
python manage.py import_github IsaPotter
echo Atualizacao concluida!
timeout /t 5