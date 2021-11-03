import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from './authConfig';

export const msalApp = new PublicClientApplication({
    auth: {
        clientId: msalConfig.auth.clientId,
        authority: msalConfig.auth.authority,
        redirectUri: msalConfig.auth.redirectUri,
        navigateToLoginRequestUrl: msalConfig.auth.navigateToLoginRequestUrl
    },
    cache: {    
        cacheLocation: msalConfig.cache.cacheLocation,
        storeAuthStateInCookie: msalConfig.cache.storeAuthStateInCookie
    }
});

