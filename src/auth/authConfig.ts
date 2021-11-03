export const msalConfig = {
    auth: {
        clientId: process.env.NEXT_PUBLIC_MSAL_CLIENT_ID,
        authority: process.env.NEXT_PUBLIC_MSAL_AUTHORITY,
        redirectUri: process.env.NEXT_PUBLIC_HOSTNAME ?? process.env.HOSTNAME,
        navigateToLoginRequestUrl: false
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true // Set this to "true" if you are having issues on IE11 or Edge
    },
}

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "https://localhost:5001",
    resourceScope: "api://9cb0437e-723f-426c-9d8c-d753e4833b9c/.default"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const loginRequest = {
    scopes: ["openid", "profile", "email", "offline_access", "api://9cb0437e-723f-426c-9d8c-d753e4833b9c/.default"]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: ["openid", apiConfig.resourceScope]
}

// Add here scopes for silent token request
export const silentRequest = {
    scopes: ["profile", apiConfig.resourceScope]
}