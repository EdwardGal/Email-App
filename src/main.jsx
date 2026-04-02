import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import styles from './app.module.scss';
import { App } from './App.jsx'

const rootElement = document.getElementById('app');
rootElement.className = styles.app;

const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
