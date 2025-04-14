import App from '@src/App';
import React from 'react';
import { createRoot } from 'react-dom/client';

document.body.innerHTML = '<div id="app"></div>';
const app = document.getElementById('app');


if (app) {
  const root = createRoot(app);
  root.render(<App />);
}