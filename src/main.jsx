import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddT from './components/AddT.jsx';
import UPdateT from './components/UPdateT.jsx';
import SingUP from './components/SingUP.jsx';
import SingIn from './components/SingIn.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/tea')
  },
  {
    path: 'addTea',
    element: <AddT></AddT>
  },
  {
    path: 'updateTea/:id',
    element: <UPdateT></UPdateT>,
    loader: ({ params }) => fetch(`http://localhost:5000/tea/${params.id}`)
  },
  {
    path: '/singUp',
    element: <SingUP></SingUP>
  },
  {
    path: 'singIn',
    element: <SingIn></SingIn>
  },
  {
    path:'users',
    element: <Users></Users>,
    loader: ()=> fetch('http://localhost:5000/user')
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
