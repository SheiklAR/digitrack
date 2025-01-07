import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Router, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import './index.css'
import { Routes } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from '../store.js'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { apiSlice } from '../slices/apiSlice.js'
import EditPage from './pages/EditPage.jsx'
import HomePage from './pages/HomePage.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >
      <Route index element={<HomePage />} />
      <Route path='edit/:id' element={<EditPage />} />
   </Route>
  )
)
  
  
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider api={apiSlice}>
      {/* <Provider store={store}> */}
      <RouterProvider router={router} />
      
      {/* </Provider> */}
    </ApiProvider>
  </StrictMode>,
)
