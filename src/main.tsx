// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PayPalScriptProvider
 options={{
    "clientId": "AXAfJ5eLBnG2XzGkPGUkTUzuleVl2pu2MSxEX8QMqraXwj-bP1ZfUd5g21YawBT3-e8yGGwQIx_5-BLH",
    currency: "USD",
  }}
>
  <App /> {/* No <BrowserRouter> here */}
</PayPalScriptProvider> 
  </React.StrictMode>
);
