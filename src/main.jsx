import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
// import Header from './Header.jsx'
// import SideNav from './Pages/SideNav.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<App/>
{/* <SideNav/> */}
    </BrowserRouter>
  </StrictMode>,
)
