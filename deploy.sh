#!/bin/bash

# Script de Deploy para Vercel
# Uso: ./deploy.sh ou npm run deploy

set -e

echo "🚀 Iniciando processo de deploy..."
echo ""

# Verificar se está na branch main
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠️  Aviso: Você está na branch '$CURRENT_BRANCH', não em 'main'"
  read -p "Deseja continuar? (s/n) " -n 1 -r
  echo
  if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "Deploy cancelado."
    exit 1
  fi
fi

# Verificar se há mudanças não commitadas
if ! git diff-index --quiet HEAD --; then
  echo "❌ Erro: Há mudanças não commitadas. Faça commit ou stash das mudanças."
  echo ""
  echo "Mudanças:"
  git status
  exit 1
fi

echo "✅ Verificações de Git passaram"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install
echo ""

# Rodar linting
echo "🔍 Verificando qualidade do código..."
npm run lint:fix
npm run format
echo ""

# Type check
echo "📝 Verificando tipos TypeScript..."
npm run type-check
echo ""

# Build
echo "🔨 Construindo projeto..."
npm run build
echo ""

# Teste do build
echo "🧪 Testando build de produção..."
npm run preview &
PREVIEW_PID=$!
sleep 2
kill $PREVIEW_PID 2>/dev/null || true
echo ""

# Commit das mudanças de formatação
if ! git diff-index --quiet HEAD --; then
  echo "📝 Commitando mudanças de formatação..."
  git add -A
  git commit -m "chore: format code with prettier and eslint"
  echo ""
fi

# Push
echo "📤 Enviando mudanças para GitHub..."
git push origin main
echo ""

echo "✨ Tudo pronto para deploy!"
echo ""
echo "🌐 Seu portfólio será deployado automaticamente via GitHub Actions."
echo "   Acompanhe em: https://github.com/SEU_USUARIO/portfólio-de-programação/actions"
echo ""
echo "📊 Monitore seu deploy em: https://vercel.com/dashboard"
