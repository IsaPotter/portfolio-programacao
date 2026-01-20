#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function exec(command, silent = false) {
  try {
    return execSync(command, { stdio: silent ? 'pipe' : 'inherit', encoding: 'utf-8' });
  } catch (error) {
    log(`❌ Erro ao executar: ${command}`, 'red');
    process.exit(1);
  }
}

async function deploy() {
  log('\n🚀 Iniciando processo de deploy...\n', 'blue');

  try {
    // Verificar branch
    log('🔍 Verificando branch...', 'blue');
    const branch = exec('git rev-parse --abbrev-ref HEAD', true).trim();
    if (branch !== 'main') {
      log(`⚠️  Você está na branch '${branch}', não em 'main'`, 'yellow');
      process.exit(1);
    }
    log('✅ Branch main detectada\n', 'green');

    // Verificar mudanças não commitadas
    log('🔍 Verificando status do Git...', 'blue');
    try {
      exec('git diff-index --quiet HEAD --', true);
      log('✅ Nenhuma mudança não commitada\n', 'green');
    } catch {
      log('⚠️  Há mudanças não commitadas, organizando...\n', 'yellow');
      exec('git add -A');
      exec('git commit -m "chore: pre-deploy commit"');
    }

    // Instalar dependências
    log('📦 Instalando dependências...', 'blue');
    exec('npm install');
    log('✅ Dependências instaladas\n', 'green');

    // Linting
    log('🔍 Verificando qualidade do código...', 'blue');
    exec('npm run lint:fix');
    exec('npm run format');
    log('✅ Código formatado\n', 'green');

    // Type check
    log('📝 Verificando tipos TypeScript...', 'blue');
    exec('npm run type-check');
    log('✅ Tipos verificados\n', 'green');

    // Build
    log('🔨 Construindo projeto...', 'blue');
    exec('npm run build');
    log('✅ Build concluído\n', 'green');

    // Verificar build artifacts
    if (!fs.existsSync(path.join(process.cwd(), 'dist'))) {
      log('❌ Pasta dist/ não encontrada após build', 'red');
      process.exit(1);
    }
    log('✅ Build artifacts verificados\n', 'green');

    // Push
    log('📤 Enviando mudanças para GitHub...', 'blue');
    exec('git add -A');
    try {
      exec('git commit -m "chore: pre-deploy format"');
    } catch {
      // Pode não haver mudanças para commitar
    }
    exec('git push origin main');
    log('✅ Mudanças enviadas\n', 'green');

    // Sucesso
    log('\n✨ Deploy preparado com sucesso!\n', 'green');
    log('🌐 Seu portfólio será deployado automaticamente via GitHub Actions.', 'blue');
    log('   Acompanhe em: https://github.com/seu-usuario/portfólio-de-programação/actions\n', 'blue');
    log('📊 Monitore seu deploy em: https://vercel.com/dashboard\n', 'blue');
  } catch (error) {
    log(`\n❌ Erro durante deploy: ${error.message}\n`, 'red');
    process.exit(1);
  }
}

deploy();
