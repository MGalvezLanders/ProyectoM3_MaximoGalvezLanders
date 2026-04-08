import { router, navigateTo } from "./routes/router.js";
import { setupLinkInterception } from "./navigation/navigation.js";
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist'
  }
});

// Listener for back/forward navigation
window.addEventListener('popstate', () =>  {
    router();
});

// Intercept link clicks
setupLinkInterception();

// Render the initial route
router();
