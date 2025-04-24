import '@mantine/dates/styles.css';
import '@mantine/core/styles.css';
import './styles.css'
import App from './app/App.tsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
