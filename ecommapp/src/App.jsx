
import './App.css'

import Header  from './nav.jsx';
 import { FaHome, FaEnvelope, FaInfoCircle } from 'react-icons/fa'; 
  import { MdContactMail } from 'react-icons/md';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home'; 
import Products from './product';
function App() {
  

  return (
    <>  
    
    <div>
      <h1 className='neav'> NEW ARRIVAL FOR YOUR <nav></nav> WINTER LOOK 2025</h1> 
      <p className='para'>Discover our latest arrivals featuring premium quality products at unbeatable prices.<nav></nav> Limited time offer on selected items.</p> 
      <button id='shop'>Shop now</button> 
      <button id='look'>view lookbook</button>
      <Header />  

      <BrowserRouter>
      
      <nav>
        <Link to="/">Home</Link> 
        <Link to="/products">Products</Link>
        
      </nav>

      
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/products" element={<Products />} />
        
      </Routes>
    </BrowserRouter>
      
  


    </div> 

    <div id='image'> 
      <img src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80'/>
      
    </div>
      
       
    </>
  )
}

export default App ; 
