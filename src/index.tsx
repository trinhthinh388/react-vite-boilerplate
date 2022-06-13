import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const rootEl = window.document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(<App />);
}
