# B2B Consultoria em Sistemas e TI + Auditiplus

Site institucional one-page desenvolvido com React, Vite, TypeScript e Tailwind CSS.

## Tecnologias

- React 18
- Vite
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React

## Como executar

Pré-requisito: Node.js 18 ou superior.

```bash
npm install
npm run dev
```

O Vite exibirá o endereço local no terminal, normalmente `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos otimizados serão gerados na pasta `dist`.

## Estrutura

```text
src/
├── components/
│   ├── Brand.tsx
│   ├── Header.tsx
│   ├── IntegrationVisual.tsx
│   ├── Reveal.tsx
│   └── SectionHeading.tsx
├── App.tsx
├── index.css
└── main.tsx
```

## Personalização

- Cores e tokens: `tailwind.config.js`
- Conteúdo e seções: `src/App.tsx`
- Estilos globais: `src/index.css`
- Navegação: `src/components/Header.tsx`

O formulário de contato foi implementado como CTA por e-mail para
`comercial@auditiplus.com.br`.
