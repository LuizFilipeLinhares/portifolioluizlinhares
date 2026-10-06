import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Nome do repositório no GitHub — usado para montar a URL do GitHub Pages
// (https://<usuario>.github.io/<repo>/). Se você publicar como
// https://<usuario>.github.io diretamente (repo chamado <usuario>.github.io)
// ou usar um domínio próprio, troque BASE_PATH para '/'.
const BASE_PATH = '/portifolioluizlinhares/';

export default defineConfig(() => {
  return {
    base: BASE_PATH,
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@': import.meta.dirname,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
    },
  };
});
