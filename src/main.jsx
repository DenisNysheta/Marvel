import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import "./assets/styles/normalize.css"

// Components
import { createBrowserRouter ,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotFound from './components/NotFound.jsx'
import Characters from './pages/Characters.jsx'
import HeroItem from './pages/HeroItem.jsx'
import Comics from './pages/Comics.jsx'
import Comic from './pages/Comic.jsx'
import Registration from './pages/Registration.jsx'

export const MyContext = createContext()


const router = createBrowserRouter([
  {
    path: "/Marvel",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/Marvel/Characters",
    element: <Characters />,
    errorElement: <NotFound />
  },
  {
    path: "/Marvel/Characters/:id",
    element: <HeroItem />,
    errorElement: <NotFound />
  },
  {
    path: "/Marvel/Comics",
    element: <Comics />,
    errorElement: <NotFound/>
  },
  {
    path: "/Marvel/Comics/:id",
    element: <Comic />,
    errorElement: <NotFound />
  },
  {
    path: "/Marvel/Registration",
    element: <Registration/>,
    errorElement: <NotFound/>
  }
]);

ReactDOM.createRoot(document.getElementById('marvel')).render(
  <React.StrictMode>
    <MyContext.Provider value={{apiKey: "2e1cdeec426ae323484f29024084c206", hash: "d516513ba95b9407c7aca0f73b241f8a"}}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  </React.StrictMode>,
)
