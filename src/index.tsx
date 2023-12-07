import React from 'react';
import ReactDOM from 'react-dom/client';

import { AuthType } from '@particle-network/auth-core';
import { Scroll } from '@particle-network/chains';
import { AuthCoreContextProvider } from '@particle-network/auth-core-modal';

import App from './App';

import('buffer').then(({ Buffer }) => {
  window.Buffer = Buffer;
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthCoreContextProvider
      options={{
        projectId: process.env.REACT_APP_PROJECT_ID,
        clientKey: process.env.REACT_APP_CLIENT_KEY,
        appId: process.env.REACT_APP_APP_ID,
        authTypes: [AuthType.email, AuthType.google, AuthType.twitter],
        themeType: 'dark',
        fiatCoin: 'USD',
        language: 'en',
        erc4337: {
          name: "SIMPLE",
          version: "1.0.0",
        },
        wallet: {
          visible: true,
          customStyle: {
            supportChains: [Scroll]
          }
        },
      }}
    >
      <App />
    </AuthCoreContextProvider>
  </React.StrictMode>
)