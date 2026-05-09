import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import { AuthRedirectPage } from './features/authentication/AuthRedirectPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AuthRedirectPage />
      </UserProvider>
    </BrowserRouter>
  </StrictMode>,
)
