import { router, navigateTo } from "./routes/router.js";
import { setupLinkInterception } from "./navigation/navigation.js";

// Listener for back/forward navigation
window.addEventListener('popstate', () =>  {
    router();
});

// Intercept link clicks
setupLinkInterception();

// Render the initial route
router();
