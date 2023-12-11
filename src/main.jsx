import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './components/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </React.StrictMode>,
)
