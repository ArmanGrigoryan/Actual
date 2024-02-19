import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.js|.jsx?$/,
    exclude: [],
    minifySyntax: true,
    minifyWhitespace: true,
    minifyIdentifiers: true,
    minify: true,
  },
  assetsInclude: ['**/*.gltf'],
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  build: {
    cssMinify: true,
    cssCodeSplit: true,
    minify: true
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "api": path.resolve(__dirname, "./src/api"),
      "app": path.resolve(__dirname, "./src/app"),
      "comp": path.resolve(__dirname, "./src/components"),
      "media": path.resolve(__dirname, "./public/media"),
      "style": path.resolve(__dirname, "./src/assets/scss"),
      "font": path.resolve(__dirname, "./src/assets/fonts"),
      "pages": path.resolve(__dirname, "./src/pages"),
      "hooks": path.resolve(__dirname, "./src/utils/hooks"),
      "helpers": path.resolve(__dirname, "./src/utils/helpers"),
      "data": path.resolve(__dirname, "./src/sample-data"),
    }
  }
})