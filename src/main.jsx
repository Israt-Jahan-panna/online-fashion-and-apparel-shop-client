import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import AuthProvider from './AuthProvider/AuthProvider'
import { RouterProvider} from 'react-router-dom'

import router from './router/PrivateRouter/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     
     
  </React.StrictMode>,
)
