import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { PlayerContextProvider } from './context/playerContext/playerContext.tsx'
import { AttackContextProvider } from './context/attackContext/attackContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PlayerContextProvider>
      <AttackContextProvider>
    <App />
    </AttackContextProvider>
    </PlayerContextProvider>
    
  </StrictMode>,
)
