import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

createRoot(document.getElementById("root")).render(
<StrictMode>
    <Auth0Provider
    domain="dev-socialdashboard.us.auth0.com"
    clientId="j8asYmxN8zmJxVkKWDEfXkKPTbmcjbm0"
    authorizationParams={{ redirect_uri: window.location.origin }}
    >
    <App />
    </Auth0Provider>
</StrictMode>,
);

