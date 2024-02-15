import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contactus from './components/ContactUS.jsx/Contactus.jsx'
import Github from './components/Github.jsx/Github.jsx'
const router=createBrowserRouter([{
  path:'/',element:<Layout/>,children:[{
    path:'',element:<Home/>
  },{path:'/about',element:<About/>},{path:'/contact',element:<Contactus/>},{path:'/github',element:<Github/>}]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
