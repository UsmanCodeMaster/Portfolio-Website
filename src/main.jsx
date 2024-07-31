import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainContent from './components/MainContent'
import ProductPage from './components/ProductPage.jsx'
import SellProduct from './components/SellProduct.jsx'
import Cart from './components/Cart.jsx'

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <MainContent />
      },
      {
        path: '/product/:id',
        element: <ProductPage />
      },
      {
        path: '/sellproduct',
        element: <SellProduct />
      }
    ]}
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
