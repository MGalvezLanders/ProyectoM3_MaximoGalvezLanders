import { chatRouter, chatNavigateTo } from "../routes/chatRouter.js";
import { chatSetupLinkInterception } from "../navigation/chatNavigation.js";

// Listener for back/forward navigation
window.addEventListener('popstate', () =>  {
    chatRouter();
});

// Intercept link clicks
chatSetupLinkInterception();

// Render the initial route
chatRouter();
