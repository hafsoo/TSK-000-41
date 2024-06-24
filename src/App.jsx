import { useState,useEffect } from 'react'
import './App.css'
import Navbr from './components/Navbr'
import Fist from './components/Fist'
import Sec from './components/Sec'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Foot from './components/Foot'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Log from './components/Log'

function App() {

  let router = createBrowserRouter([
    {
      path:'/',
      element:
      <>
      <div className='internee max-w-[100vw] overflow-hidden'>
      <Navbr/>
       <Fist/>
       <Sec/>
       <Three />
       <Four/>
       <Five />
       <Foot/>
       </div>
       </>  
   },
    {
       path:'/login',
       element:<Log/>
    },
    {
      path:'/internships',
      element:<><Navbr/> <Three/></>
   },
   {
    path:'/reviews',
    element:<div className='overflow-hidden'><Navbr/> <Five/></div>
 },
 {
  path:'/contact',
  element:<><Navbr/> <Foot/></>
}
])
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  )
}

export default App
