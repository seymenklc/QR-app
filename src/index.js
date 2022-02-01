import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

import { QRCodeProvider } from './context/QRContext';

ReactDOM.render(
  <React.StrictMode>
    <QRCodeProvider>
      <App />
    </QRCodeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

