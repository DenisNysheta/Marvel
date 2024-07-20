import React from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/normalize.css"

// Components
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Characters from './pages/Characters.jsx'
import HeroItem from './pages/HeroItem.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />
  },
  {
    path: "/Characters",
    element: <Characters />,
    errorElement: <NotFound />
  },
  {
    path: "/Characters/:id",
    element: <HeroItem />,
    errorElement: <NotFound />
  }
]);

ReactDOM.createRoot(document.getElementById('marvel')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
