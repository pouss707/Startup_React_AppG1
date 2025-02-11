import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


// setup routing system :
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import RoutesConfig from './shared/router.config.jsx';


const router = createBrowserRouter(RoutesConfig);


// HOC : high order component contextProvider / layouts / customeProvider (axios)



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}> 
      <App />
    </RouterProvider>
  </StrictMode>,
);

// render JSX 
