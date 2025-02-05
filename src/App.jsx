
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
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Scrolltop from './components/Scrolltotop.jsx';

 

function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Scrolltop/>
<Routes>
<Route path='/' element={<Homepage/>}/>
<Route path='/about' element={<Aboutpage/>}/>
<Route path='/blog' element={<Education/>}/>
<Route path='/skill' element={<Skillpage/>}/>
<Route path='/featuredpost' element={<Projectpage/>}/>
<Route path='/contact' element={<Contactpage/>}/>




</Routes>




      </BrowserRouter>
      
    
    </div>
  )
}

export default App
