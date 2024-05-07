import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import { AuthProvider } from './AuthContext.jsx';

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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
       <RouterProvider router={router}/>
    </AuthProvider> 
  </React.StrictMode>,
)


