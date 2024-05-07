import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.js';
import { AuthProvider } from './AuthContext.js';

const rootElement = document.getElementById('root')
if(!rootElement) throw new Error('Failed to find the root element')

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>Not found</div>
  },
  {
    path:'/about-us',
    element:<h2>About us</h2>
  }
])

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router}/>
    </AuthProvider> 
  </React.StrictMode>,
)


