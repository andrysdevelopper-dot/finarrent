// Auth0 Configuration
export const auth0Config = {
  domain: import.meta.env.VITE_AUTH0_DOMAIN || 'YOUR_AUTH0_DOMAIN',
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID || 'YOUR_AUTH0_CLIENT_ID',
  authorizationParams: {
    redirect_uri: window.location.origin,
  },
};
