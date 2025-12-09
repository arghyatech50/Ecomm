import './App.css';
import { Link } from 'react-router-dom';
import { FaHome, FaEnvelope, FaInfoCircle, FaSearch, FaShoppingCart, FaTags } from 'react-icons/fa';
import { MdContactMail } from 'react-icons/md';


function Header() {
return (
<div id='header'>


<Link to="/" className="head">Home <FaHome /></Link>
<Link to="/price" className="head">Price <FaTags /></Link>
<Link to="/cart" className="head">Cart <FaShoppingCart /></Link>
<Link to="/contact" className="head">Contact <MdContactMail /></Link>
<Link to="/about" className="head">About Us <FaInfoCircle /></Link>
<Link to="/email" className="head">Email Us <FaEnvelope /></Link>


<div className="search-box">
<input type="text" placeholder="Search..." />
<Link to="/search" className="search-button"><FaSearch /></Link>
</div>


</div>
);
}


export default Header;
