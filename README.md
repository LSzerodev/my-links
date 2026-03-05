# Linktree UI
Projeto frontend de uma pagina estilo Linktree com foco em UI/UX, visual preto e branco e layout responsivo.

## Objetivo
Centralizar links importantes (portfolio, redes e contato) em uma interface limpa, moderna e facil de navegar em desktop, tablet e mobile.

## Funcionalidades
- Layout principal com proporcao `16:9` no desktop (referencia 1920x1080)
- Responsividade para tablet e mobile
- Cartoes de links com feedback visual (hover/focus)
- Popup de contato ao clicar em `Contato`
- Modal com email e WhatsApp
- Fechamento do modal por:
  - botao `Fechar`
  - clique fora do modal
  - tecla `Esc`

## Stack
- React 19
- TypeScript
- Vite
- CSS puro

## Estrutura principal
```txt
src/
  App.tsx        # Estrutura da interface e logica do modal
  index.css      # Estilos globais, layout e responsividade
  main.tsx       # Entrada da aplicacao
```

## Como executar localmente
1. Instale as dependencias:

```bash
npm install
```

2. Rode em desenvolvimento:

```bash
npm run dev
```

3. Build de producao:

```bash
npm run build
```

4. Preview da build:

```bash
npm run preview
```

## Scripts disponiveis

- `npm run dev`: inicia servidor de desenvolvimento
- `npm run build`: gera build de producao
- `npm run lint`: executa ESLint
- `npm run preview`: abre preview da build

## Personalizacao rapida

- Edite os links em `src/App.tsx` no array `profileLinks`
- Edite os atalhos sociais em `src/App.tsx` no array `quickActions`
- Edite email e WhatsApp no bloco do modal em `src/App.tsx`
- Ajuste cores e espacamentos em `src/index.css` (`:root` e classes principais)

## Licenca
Uso livre para estudo e personalizacao.
