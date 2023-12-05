import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Update from './components/Update.jsx';
import AddTea from './components/AddTea.jsx';
import AddT from './components/AddT.jsx';
import UPdateT from './components/UPdateT.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: ()=> fetch('http://localhost:5000/tea')
  },
  {
    path:'addTea',
    element:<AddT></AddT>
  },
  {
    path:'updateTea/:id',
    element:<UPdateT></UPdateT>,
    loader: ({params})=> fetch(`http://localhost:5000/tea/${params.id}`)
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
