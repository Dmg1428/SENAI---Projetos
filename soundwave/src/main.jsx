import React from 'react';
import ReactDOM from 'react-dom/client';
// ⭐ CORREÇÃO: Importe o componente App usando o 'default' (sem chaves)
import App from './App.jsx'; 
import './style/main.css'; 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);