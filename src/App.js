import './App.css';
import Navbar from './components/core/navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Switch from 'react-switch';
import Home from './pages/home.js';
import Shop from './pages/shop.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
import Checkout from './pages/checkout.js';

function App() {
 return (                                                                
      <div className="App">
          <Router>  
          <Navbar />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/checkout" element={<Checkout />} />
            {/*<Route path="/admin" component={requireAuth(NoteContainer)} />*/}
          </Routes>
         </Router>  
      </div>
  )};

export default App;
