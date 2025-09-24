import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css';
import App from './App'
import Header from "./components/Header/Header.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <App />
      <Header />
  </StrictMode>,
)
