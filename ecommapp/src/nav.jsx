import './App.css' 
import { FaHome, FaEnvelope, FaInfoCircle } from 'react-icons/fa'; 
  import { MdContactMail } from 'react-icons/md'; 
  import { FaSearch } from 'react-icons/fa'; 
   import { FaShoppingCart } from 'react-icons/fa'
   import { FaTags } from 'react-icons/fa';


function Header(){
    return(
        <div id='header'>
            <button className="head"> Home  <FaHome /></button>
            <button className="head">Price <FaTags/></button>
            <button className="head">Cart  <FaShoppingCart/></button> 
            <button className="head">Contact <MdContactMail /></button>
            <button className="head">About Us <FaInfoCircle /></button>
            <button className="head">Email Us <FaEnvelope /></button> 
            <div className="search-box">
              <input type="text" placeholder="Search..." />
              <button className="search-button"><FaSearch /></button>
            </div>
        </div>

    )
} 

export default Header; 
