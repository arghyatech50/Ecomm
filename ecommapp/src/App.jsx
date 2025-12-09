import './App.css';
import Header from './nav.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './product';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
import Email from './Email';
import Search from './Search';


function App() {
return (
<>
<BrowserRouter>
<Header />


<div>
<h1 className='neav'>NEW ARRIVAL FOR YOUR WINTER LOOK 2025</h1>
<p className='para'>Discover our latest arrivals featuring premium quality products at unbeatable prices. Limited time offer on selected items.</p>
<button id='shop'>Shop now</button>
<button id='look'>view lookbook</button>
</div>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/products" element={<Products />} />
<Route path="/price" element={<Products />} />
<Route path="/cart" element={<Cart />} />
<Route path="/contact" element={<Contact />} />
<Route path="/about" element={<About />} />
<Route path="/email" element={<Email />} />
<Route path="/search" element={<Search />} />
</Routes>


<div id='image'>
<img src='https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80' />
</div>
</BrowserRouter>
</>
)
}
export default App;
