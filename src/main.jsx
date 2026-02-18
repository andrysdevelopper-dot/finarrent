import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
// import { Auth0Provider } from '@auth0/auth0-react';
// import { auth0Config } from './config/auth0';
import App from './App.jsx';
import './index.css';

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY || '';
// Si pas de clé reCAPTCHA, on utilise une clé de test Google (fonctionne en localhost)
const effectiveRecaptchaKey = recaptchaSiteKey || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={effectiveRecaptchaKey} scriptProps={{ async: true, defer: true }}>
    <HelmetProvider>
    {/* Auth0Provider temporarily disabled for development */}
    {/* <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
      authorizationParams={auth0Config.authorizationParams}
    > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Auth0Provider> */}
    </HelmetProvider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>,
);
