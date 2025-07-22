import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import SignUp from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    path : '/',
    element : <Home />
  },
  {
    path : '/register',
    element : <SignUp />
  },
  {
    path : '/login',
     element : <Login />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
