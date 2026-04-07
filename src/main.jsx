import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router/dom'
import { router } from './Routes/Routes.jsx'
import BookCollection from './Components/Context/BookCollection.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookCollection>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer />
    </BookCollection>
  </StrictMode>,
)
