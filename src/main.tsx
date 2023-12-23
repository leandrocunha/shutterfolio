import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './Home.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/casais",
    element: <Gallery collection="couples" />
  },
  {
    path: "/familias",
    element: <Gallery collection="couples" />
  },
  {
    path: "/pessoas",
    element: <Gallery collection="couples" />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "/contato",
    element: <Contact />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
