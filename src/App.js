import './App.css';
import Navbar from './components/core/navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Switch from 'react-switch';
import Home from './components/home/home.js';
import Store from './components/store/store.js';
import About from './components/about/about.js';
import Contact from './components/contact/contact.js';
import Checkout from './components/checkout/checkout.js';
import ItemDetail from './components/store/itemDetail.js';

function App() {
 return (                                                                
      <div className="App">
          <Router>  
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/itemDetail" element={<ItemDetail />} />
          </Routes>
         </Router>  
      </div>
  )};

export default App;
