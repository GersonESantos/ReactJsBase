# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
npm install

npm install @emotion/react@^11.14.0
npm install @emotion/styled@^11.14.1
npm install @mui/icons-material@^5.18.0
npm install @mui/material@^5.18.0
npm install react@^18.2.0
npm install react-dom@^18.2.0

npm install --save-dev @types/react@^18.2.56
npm install --save-dev @types/react-dom@^18.2.19
npm install --save-dev @typescript-eslint/eslint-plugin@^7.0.2
npm install --save-dev @typescript-eslint/parser@^7.0.2
npm install --save-dev @vitejs/plugin-react@^4.2.1
npm install --save-dev eslint@^8.56.0
npm install --save-dev eslint-plugin-react-hooks@^4.6.0
npm install --save-dev eslint-plugin-react-refresh@^0.4.5
npm install --save-dev typescript@^5.2.2
npm install --save-dev vite@^5.1.4

npm install @emotion/react@^11.14.0 @emotion/styled@^11.14.1 @mui/icons-material@^5.18.0 @mui/material@^5.18.0 react@^18.2.0 react-dom@^18.2.0 --save && npm install @types/react@^18.2.56 @types/react-dom@^18.2.19 @typescript-eslint/eslint-plugin@^7.0.2 @typescript-eslint/parser@^7.0.2 @vitejs/plugin-react@^4.2.1 eslint@^8.56.0 eslint-plugin-react-hooks@^4.6.0 eslint-plugin-react-refresh@^0.4.5 typescript@^5.2.2 vite@^5.1.4 --save-dev

# Iniciar servidor de desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Executar linting
npm run lint

# Visualizar build de produção
npm run preview