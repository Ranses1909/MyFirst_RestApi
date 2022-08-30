import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import {AppProvider} from './context'
// import './index.css';
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // wrapping the whole app in context provider
  <React.StrictMode>
    <AppProvider>
    <App />
    </AppProvider>
  </React.StrictMode>
);

