import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { AuthRedirectPage } from './features/authentication/AuthRedirectPage'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './assets/stylesGeneral.css';
import * as bootstrap from "bootstrap";

(window as any).bootstrap = bootstrap;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthRedirectPage />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
