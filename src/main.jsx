import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sidebar from './Components/SideBar/Sidebar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Sidebar/> */}
    <App />
    
  </StrictMode>,
)