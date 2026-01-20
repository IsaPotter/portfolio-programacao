# 🚀 Guia de Implantação no Vercel

## Opção 1: Deploy Automático via Git (Recomendado)

### Passo 1: Preparar o Repositório
```bash
# Certifique-se de que está na branch main
git checkout main
git push origin main
```

### Passo 2: Conectar ao Vercel
1. Visite [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione **"Import Git Repository"**
4. Conecte sua conta GitHub
5. Selecione o repositório `portfólio-de-programação`
6. Clique em **"Import"**

### Passo 3: Configurar Variáveis de Ambiente
1. Na página do projeto, vá para **Settings** → **Environment Variables**
2. Adicione as variáveis conforme necessário:
   - `GEMINI_API_KEY` (se usar API)

### Passo 4: Deploy
1. Clique em **"Deploy"**
2. O Vercel construirá e deployará seu projeto automaticamente
3. Após conclusão, você terá um link público

### Deploy Automático Futuro
- Após a primeira configuração, cada push para a branch `main` deployará automaticamente
- Pushes para `develop` criam deployments de preview

---

## Opção 2: Deploy via CLI

### Instalar Vercel CLI
```bash
npm i -g vercel
```

### Fazer Login
```bash
vercel login
```

### Deploy
```bash
vercel
```

Para produção:
```bash
vercel --prod
```

---

## Opção 3: Deploy Manual

### Build Local
```bash
npm run build
```

### Fazer Upload da Pasta `dist/`
1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Selecione **"Skip Git"**
4. Arraste a pasta `dist/` para upload
5. Configure as variáveis de ambiente se necessário
6. Clique em **"Deploy"**

---

## Configurações Importantes

### Domínio Customizado
1. Em **Settings** → **Domains**
2. Clique em **"Add"**
3. Insira seu domínio
4. Configure os DNS records conforme instruções

### Variáveis de Ambiente Seguras
- Nunca commite `.env.local` no Git
- Adicione variáveis sensíveis apenas no dashboard do Vercel
- Use `.env.example` para documentar variáveis necessárias

### Monitoramento
- Acesse **Deployments** para ver histórico de deployments
- Use **Analytics** para monitorar performance
- Configure alertas em **Settings** → **Alerts**

---

## Troubleshooting

### Build falha no Vercel mas funciona localmente
```bash
# Teste o build localmente primeiro
npm run build
npm run preview

# Verifique se todas as dependências estão no package.json
npm list
```

### Erro: "Cannot find module"
- Verifique se o módulo está em `dependencies` (não `devDependencies`)
- Alguns pacotes devem estar em `dependencies` para produção

### Erro de Variáveis de Ambiente
- Confirme que adicionou as variáveis no dashboard do Vercel
- Faça redeploy após adicionar variáveis

---

## Monitoramento e Otimização

### Web Vitals
- Acesse **Analytics** no dashboard do Vercel
- Monitore performance e Web Vitals (LCP, FID, CLS)

### Build Optimization
O arquivo `vercel.json` já está configurado com:
- ✅ Comando de build otimizado
- ✅ Cache headers para assets estáticos
- ✅ Security headers
- ✅ Rewrite de rotas para SPA

---

## Referências Úteis

- [Documentação Vercel](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html#vercel)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs) (para referência)

---

## Após o Deploy

1. Teste seu portfólio em produção
2. Configure seu domínio customizado
3. Monitore analytics e performance
4. Configure alertas de erro
5. Atualize seu README com o link do Vercel

**Status do Deploy**: ✅ Configurado e pronto para implantar!
