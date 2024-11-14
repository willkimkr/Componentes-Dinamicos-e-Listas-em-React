import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Ctrl + ; ou Ctrl + /
// Adiciona comentarios

createRoot(document.getElementById('root')).render(
  // StrictMode ativado duplica todas as suas logs e rederizacoes
  <StrictMode>
    <App />
  </StrictMode>,
)
