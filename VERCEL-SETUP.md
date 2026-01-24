# ✅ Checklist de Deploy Vercel

## Pré-requisitos

- [ ] Conta no GitHub
- [ ] Repositório criado e código pushado para `main`
- [ ] Conta no Vercel (pode usar login com GitHub)
- [ ] Node.js 16+ instalado localmente

## Passo 1: Preparar o Repositório Localmente

```bash
# 1. Certificar-se que está na branch main
git checkout main

# 2. Atualizar com as últimas mudanças
git pull origin main

# 3. Rodar verificações finais
npm run lint:fix
npm run format
npm run type-check
npm run build

# 4. Se tudo passar, fazer push
git add -A
git commit -m "chore: final pre-deploy check"
git push origin main
```

## Passo 2: Conectar ao Vercel

### Opção A: Via Dashboard Web (Mais Fácil)

1. Acesse **https://vercel.com**
2. Clique em **"Log in"** → **"GitHub"** (ou crie uma conta)
3. Autentique com sua conta GitHub
4. Clique em **"New Project"**
5. Você verá seus repositórios - selecione **"portfólio-de-programação"**
6. Clique em **"Import"**

### Opção B: Via Vercel CLI

```bash
# Instalar CLI (opcional)
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel --prod
```

## Passo 3: Configurar o Projeto no Vercel

Na página de configuração do projeto:

### Framework Preset

- **Framework**: Vite (será detectado automaticamente)
- **Root Directory**: ./
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Environment Variables

Se usar API do Gemini:

- Nome: `GEMINI_API_KEY`
- Valor: Sua chave de API
- Clique em **"Add"**

_Deixe em branco se não usar IA no portfólio_

### Advanced Settings

Deixe as padrões, exceto:

- **Enable Incremental Static Regeneration**: OFF
- **Automatically expose System Environment Variables**: ON

## Passo 4: Deploy Inicial

1. Clique em **"Deploy"**
2. Espere a build completar (pode levar 1-2 minutos)
3. Quando terminar, você verá **"Congratulations!"**
4. Clique no link para ver seu portfólio ao vivo! 🎉

## Passo 5: Configurações Pós-Deploy

### Verificar Deploy

- Acesse o dashboard do seu projeto no Vercel
- Vá até **"Deployments"** para ver histórico
- Cada push para `main` gera um novo deployment automático

### Domínio Customizado (Opcional)

1. Em **Settings** → **Domains**
2. Clique em **"Add"**
3. Digite seu domínio (ex: `seu-site.com.br`)
4. Siga as instruções para configurar DNS
5. Espere propagação DNS (pode levar 24-48h)

### Configurar CNAME (DNS da seu domínio)

Se usar seu próprio domínio:

1. Vá até seu provedor de domínio (GoDaddy, Namecheap, etc.)
2. Acesse configurações DNS
3. Adicione um registro CNAME:
   - Host: `www` (ou seu subdomínio)
   - Aponta para: `cname.vercel-dns.com.`

## Passo 6: Monitoramento Contínuo

### Analytics

- **Settings** → **Analytics**
- Monitore Web Vitals e performance
- Ideal para otimizações futuras

### Alertas

- **Settings** → **Alerts**
- Configure notificações para falhas de build
- Alertas por email quando necessário

### Logs

- **Deployments** → Selecione um deployment
- Veja logs completos da build
- Útil para troubleshooting

## Passo 7: Atualizar Seu README

Adicione ao README.md:

````markdown
## 🌐 Deploy

Este projeto está deployado no Vercel:

**[Ver Portfólio ao Vivo](https://seu-dominio-vercel.vercel.app)**

### Deployar Atualizações

Basta fazer `git push` para `main`:

```bash
git add .
git commit -m "sua mensagem"
git push origin main
```
````

O Vercel deployará automaticamente em poucos segundos!

````

## Troubleshooting

### ❌ Build falha no Vercel mas funciona localmente

**Solução:**
```bash
# Teste a build exatamente como Vercel faz
npm ci  # instala versões exatas do package-lock.json
npm run build
npm run preview
````

### ❌ Erro: "Cannot find module X"

**Solução:**

- Verifique se o módulo está em `dependencies` (não `devDependencies`)
- Para runtime: `npm install pacote`
- Para dev: `npm install --save-dev pacote`
- Faça push e redeploy

### ❌ Variáveis de Ambiente não funcionam

**Solução:**

1. Confirme que adicionou em **Settings** → **Environment Variables**
2. Redeploy clicando em **"Redeploy"** (não apenas push)
3. Verifique o nome da variável - é case-sensitive

### ❌ Domínio customizado não funciona

**Solução:**

1. Verifique propagação DNS: https://www.nslookup.io
2. Aguarde 24-48h após configurar CNAME
3. Teste com: `nslookup seu-dominio.com`
4. Contate seu provedor de domínio se não funcionar

## ✅ Checklist de Sucesso

- [ ] Projeto deployado e acessível via URL do Vercel
- [ ] Todos os links funcionam
- [ ] Responsivo em mobile
- [ ] Analytics funcionando
- [ ] Cada push auto-deploya
- [ ] Domínio customizado configurado (se desejado)
- [ ] README atualizado com link do portfólio
- [ ] Pronto para compartilhar! 🎉

---

## Próximos Passos

1. **Compartilhe seu portfólio:**
   - LinkedIn
   - GitHub Bio
   - Currículo
   - Email

2. **Continue melhorando:**
   - Adicione mais projetos
   - Otimize performance (Lighthouse)
   - Implemente mais interações

3. **Monitore sucesso:**
   - Acompanhe analytics
   - Solicite feedback
   - Atualize regularmente

---

## Links Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html#vercel)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Seu Dashboard Vercel](https://vercel.com/dashboard)

---

**Status**: ✅ Pronto para deploy no Vercel!
