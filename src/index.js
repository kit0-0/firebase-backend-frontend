import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import setupFirebase from './firebase';

setupFirebase();


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


