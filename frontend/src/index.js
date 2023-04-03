import React from 'react';
import { Auth0Provider } from "@auth0/auth0-react";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
    domain={process.env.REACT_APP_domain}
    clientId={process.env.REACT_APP_clientId}
    authorizationParams={{
      redirect_uri: window.location.href
    }}
    useRefreshTokens={true}
    cacheLocation='localstorage'
  > 
    <App />

    </Auth0Provider>
  </React.StrictMode>
);
