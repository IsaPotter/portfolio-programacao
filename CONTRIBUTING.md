# Contribuindo para o Portfólio

Obrigado por se interessar em contribuir! Este documento fornece diretrizes e instruções para contribuir.

## Como Contribuir

### Reportando Bugs

Antes de criar um relatório de bug, por favor verifique a lista de issues existentes, pois você pode descobrir que a falha já foi relatada. Quando você está criando um relatório de bug, inclua:

- **Use um título descritivo**
- **Descreva os passos exatos que reproduzem o problema**
- **Descreva o comportamento observado** e aponte qual é exatamente o problema
- **Explique qual é o comportamento esperado**
- **Inclua capturas de tela, se possível**
- **Mencione sua versão do Node.js, npm e sistema operacional**

### Sugestões de Melhoria

As sugestões de melhoria são bem-vindas! Crie uma issue com:

- **Um título descritivo**
- **Uma descrição passo a passo da melhoria sugerida**
- **Exemplos específicos para demonstrar os passos**
- **Uma explicação de por que essa melhoria seria útil**

### Pull Requests

- Preencha o template fornecido
- Siga os guias de estilo [StyleGuides](#styleguides)
- Inclua screenshots e gifs animados quando possível
- Mantenha a descrição clara e concisa
- Termine todos os arquivos com uma nova linha

## StyleGuides

### Git Commit Messages

- Use o tempo presente ("Adiciona feature" não "Adicionou feature")
- Use o imperativo ("Move cursor para..." não "Move cursor para...")
- Limite a primeira linha a 72 caracteres ou menos
- Referencie issues e pull requests generosamente após a primeira linha

### TypeScript StyleGuide

- Use `const` por padrão, `let` se necessário evitar `var`
- Use type inference sempre que possível
- Use `React.FC<Props>` para componentes funcionais
- Prefira componentes funcionais com hooks ao invés de classes
- Nomeie componentes com PascalCase

### CSS/Tailwind

- Use classes Tailwind ao invés de CSS custom quando possível
- Siga a ordem recomendada de classes Tailwind
- Use variáveis CSS para valores que se repetem
- Mantenha as classes em ordem alfabética

## Processo de Pull Request

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Faça commit das mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Verificações Necessárias

Antes de submeter um PR, execute:

```bash
npm run lint:fix
npm run format
npm run type-check
npm run build
```

Certifique-se de que todos os testes passam e não há erros de linting ou tipos.

## Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob sua Licença MIT.
