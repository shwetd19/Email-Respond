// vite.config.js
import ReactRefresh from "@vitejs/plugin-react-refresh";

export default {
  build: {
    rollupOptions: {
      input: '/src/main.jsx',
    },
  },
  plugins: [ReactRefresh()],
};
