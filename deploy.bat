@echo off
REM Script de Deploy para Vercel (Windows)
REM Uso: deploy.bat ou npm run deploy

setlocal enabledelayedexpansion

echo 🚀 Iniciando processo de deploy...
echo.

REM Verificar se está na branch main
for /f "tokens=*" %%i in ('git rev-parse --abbrev-ref HEAD') do set CURRENT_BRANCH=%%i
if not "%CURRENT_BRANCH%"=="main" (
    echo ⚠️  Aviso: Você está na branch '%CURRENT_BRANCH%', não em 'main'
    set /p CONTINUE="Deseja continuar? (s/n) "
    if /i not "%CONTINUE%"=="s" (
        echo Deploy cancelado.
        exit /b 1
    )
)

REM Verificar se há mudanças não commitadas
git diff-index --quiet HEAD --
if !ERRORLEVEL! NEQ 0 (
    echo ❌ Erro: Há mudanças não commitadas. Faça commit ou stash das mudanças.
    echo.
    echo Mudanças:
    git status
    exit /b 1
)

echo ✅ Verificações de Git passaram
echo.

REM Instalar dependências
echo 📦 Instalando dependências...
call npm install
echo.

REM Rodar linting
echo 🔍 Verificando qualidade do código...
call npm run lint:fix
call npm run format
echo.

REM Type check
echo 📝 Verificando tipos TypeScript...
call npm run type-check
echo.

REM Build
echo 🔨 Construindo projeto...
call npm run build
echo.

REM Push
echo 📤 Enviando mudanças para GitHub...
git add -A
git commit -m "chore: format code before deploy" || true
git push origin main
echo.

echo ✨ Tudo pronto para deploy!
echo.
echo 🌐 Seu portfólio será deployado automaticamente via GitHub Actions.
echo    Acompanhe em: https://github.com/SEU_USUARIO/portfólio-de-programação/actions
echo.
echo 📊 Monitore seu deploy em: https://vercel.com/dashboard
