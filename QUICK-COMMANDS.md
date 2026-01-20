# 🎯 Comandos Rápidos de Referência

## 📝 Desenvolvimento Local

```bash
# Iniciar servidor de desenvolvimento
npm run dev

# Construir para produção
npm run build

# Visualizar build localmente
npm run preview
```

---

## 🔍 Qualidade de Código

```bash
# Verificar erros de linting
npm run lint

# Corrigir erros automaticamente
npm run lint:fix

# Formatar código com Prettier
npm run format

# Verificar formatação sem alterar
npm run format:check

# Verificar tipos TypeScript
npm run type-check
```

---

## 🚀 Deploy

```bash
# Deploy automático com verificações
npm run deploy

# Push manual (Vercel deploya automaticamente)
git push origin main

# Deployment via Vercel CLI (requer instalação)
vercel --prod
```

---

## 📊 Monitoramento

```bash
# Ver status do Git
git status

# Ver histórico de commits
git log

# Ver branch atual
git branch

# Mudança entre branches
git checkout nome-da-branch
```

---

## 🔐 Variáveis de Ambiente

### Adicionar .env.local (local)
```bash
# Copiar template
cp .env.example .env.local

# Editar com suas chaves
echo "GEMINI_API_KEY=sua_chave" >> .env.local
```

### Adicionar no Vercel (produção)
```
1. Dashboard Vercel → Settings → Environment Variables
2. Clique "Add"
3. Nome: GEMINI_API_KEY
4. Value: sua_chave
5. Clique "Save"
6. Redeploy seu projeto
```

---

## 🐛 Troubleshooting Rápido

```bash
# Limpar cache e reinstalar
rm -rf node_modules package-lock.json
npm install

# Limpar build e reconstruir
rm -rf dist
npm run build

# Testar build de produção localmente
npm run build && npm run preview

# Ver todos os scripts disponíveis
npm run
```

---

## 📂 Arquivos Importantes

| Arquivo | Descrição |
|---------|-----------|
| `vercel.json` | ⚙️ Configuração do Vercel |
| `vite.config.ts` | ⚙️ Configuração do Vite |
| `tsconfig.json` | ⚙️ Configuração TypeScript |
| `.eslintrc.json` | ⚙️ Regras ESLint |
| `.prettierrc.json` | ⚙️ Regras Prettier |
| `package.json` | 📦 Dependências e scripts |

---

## 🔗 Links Rápidos

| Link | Acesso |
|------|--------|
| Seu Portfólio | `https://seu-projeto.vercel.app` |
| Dashboard Vercel | `https://vercel.com/dashboard` |
| Repositório GitHub | `https://github.com/IsaPotter/portfolio-programacao` |
| Editor Local | `VS Code ou seu editor favorito` |

---

## 📚 Guias de Documentação

```
DEPLOY-QUICK.md           ← Comece aqui (5 min)
VERCEL-CONFIG-SUMMARY.md  ← Visão geral das configs
VERCEL-SETUP.md          ← Guia passo a passo
DEPLOY-VERCEL.md         ← Referência completa
```

---

## ✅ Checklist Antes de Publicar

- [ ] `npm run lint:fix` (sem erros)
- [ ] `npm run type-check` (sem erros)
- [ ] `npm run build` (sucesso)
- [ ] `npm run preview` (tudo funciona)
- [ ] Links de navegação funcionam
- [ ] Responsivo em mobile
- [ ] Sem console errors
- [ ] Ready to push!

---

**Dica:** Salve este arquivo como referência rápida! 📌
