import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next'; // Importa I18nextProvider
import i18n from './i18n'; // Importa tu configuración de i18n
import App from './App.jsx';
import './index.css';

// Renderiza la aplicación utilizando ReactDOM.createRoot
ReactDOM.createRoot(document.getElementById('root')).render(
  <I18nextProvider i18n={i18n}> {/* Envuelve tu App con I18nextProvider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </I18nextProvider>,
);