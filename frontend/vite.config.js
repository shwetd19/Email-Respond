// vite.config.js
import ReactRefresh from "@vitejs/plugin-react-refresh";

export default {
  build: {
    rollupOptions: {
      external: '/src/main.jsx',
    },
  },
  plugins: [ReactRefresh()],
};
