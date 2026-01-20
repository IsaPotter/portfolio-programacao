# Portfólio de Programação 💼

Um portfólio moderno e responsivo criado com React, TypeScript e Vite. Apresenta projetos, habilidades e experiência com animações suaves e design elegante.

<div align="center">

![React](https://img.shields.io/badge/React-19.2-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-6.2-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green)

</div>

## ✨ Características

- ⚡ **Vite** - Build tool rápido e moderno
- 🎨 **Tailwind CSS** - Styling moderno e responsivo
- 🎬 **Framer Motion** - Animações suaves e interativas
- 📱 **Responsivo** - Design mobile-first
- ♿ **Acessível** - Semântica HTML correta
- 🔍 **SEO Otimizado** - Metadados e estrutura apropriada
- 🎯 **TypeScript** - Type safety em todo projeto
- 📝 **ESLint & Prettier** - Code quality e formatting automático

## 📋 Requisitos

- Node.js 16+ 
- npm ou yarn

## 🚀 Instalação e Desenvolvimento

1. **Clone ou baixe o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/portfólio-de-programação.git
   cd portfólio-de-programação
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

   O projeto estará disponível em `http://localhost:3000`

## 📦 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Faz build para produção |
| `npm run preview` | Visualiza build de produção localmente |
| `npm run lint` | Verifica qualidade do código |
| `npm run lint:fix` | Corrige problemas automáticos |
| `npm run format` | Formata código com Prettier |
| `npm run type-check` | Verifica tipos TypeScript |

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── App.tsx              # Componente raiz
│   ├── Header.tsx           # Navegação
│   ├── Hero.tsx             # Seção hero
│   ├── About.tsx            # Sobre mim
│   ├── Skills.tsx           # Habilidades
│   ├── Experience.tsx       # Experiência profissional
│   ├── Projects.tsx         # Seção de projetos
│   ├── ProjectCard.tsx      # Card individual de projeto
│   ├── Contact.tsx          # Seção de contato
│   └── Footer.tsx           # Rodapé
├── types.ts                 # Tipos TypeScript globais
├── constants.tsx            # Constantes da aplicação
├── index.tsx                # Entry point
└── index.html               # HTML raiz
```

## 🎨 Personalizando

### Cores e Temas

Edite as cores em [constants.tsx](constants.tsx) para personalizar o tema do portfólio.

### Dados do Portfólio

- **Projetos**: Adicione/edite em [Projects.tsx](components/Projects.tsx)
- **Habilidades**: Configure em [Skills.tsx](components/Skills.tsx)
- **Experiência**: Atualize em [Experience.tsx](components/Experience.tsx)

## 🚢 Deploy

### Vercel (Recomendado)

1. Push seu repositório para GitHub
2. Conecte seu repositório no [Vercel](https://vercel.com)
3. Vercel detectará automaticamente que é um projeto Vite
4. Deploy automático em cada push

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Node.js:

- **Netlify**: Conecte seu Git repo
- **GitHub Pages**: Execute `npm run build` e faça deploy da pasta `dist/`
- **AWS, Azure, Google Cloud**: Use Docker com a build do Vite

## 🤝 Contribuindo

Contribuições são bem-vindas! Para grandes mudanças, abra uma issue primeiro para discutir.

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👤 Sobre

Desenvolvido com ❤️ por Isabela

---

**Dúvidas ou sugestões?** Abra uma [issue](https://github.com/seu-usuario/portfólio-de-programação/issues) ou entre em contato.
