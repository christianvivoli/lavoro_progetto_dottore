import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './components/Login';

const chiave =1;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        
      <App />
  </React.StrictMode>
);

reportWebVitals();
