import { useState } from 'react'
import Homepage from './pages/Homepage.jsx';
import Aboutpage from './pages/Aboutpage.jsx';
import Education from './pages/Educationpage.jsx';
import Skillpage from './pages/Skillpage.jsx';
import Projectpage from './pages/Projectpage.jsx';
import Contactpage from './pages/Contactpage.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import './Home.js';
import './App.css';
import {motion} from 'framer-motion';
import { fadeIn } from './Variants.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
 const router = createBrowserRouter ([
  {
    element: <Navbar/>
   },
   {
    path: '/',
    element: <Homepage/>
   },
   {
    path: '/about',
    element: <Aboutpage/>
   },
   {
    path: '/blog',
    element: <Education/>
   },
   {
    path: '/skill',
    element: <Skillpage/>
   },
   {
    path: '/featuredpost',
    element: <Projectpage/>
   },
   {
    path: '/contact',
    element: <Contactpage/>
   }





 ])

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      
      <RouterProvider router={router} />
    
    </div>
  )
}

export default App
