import { Navbar, Footer, Underbar, UnderbarNav } from './components/core/core.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js';
import StoreSelect from './components/store/store_select.js';
import Store from './components/store/store.js';
import About from './components/about/about.js';
import Skating from './components/skating/skating.js';
import Designs from './components/designs/designs.js';
import Checkout from './components/checkout/checkout.js';
import ItemPreview from './components/item_preview/item_preview.js';
import Login from './components/login/login.js';
import StoreAdmin from './components/store_admin/store_admin.js';
import css from './App.module.css';

function App() {
 return (                                                                
      <div className={css.App}>
          <Router>  
          <Navbar/>
          <UnderbarNav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store_selection" element={<StoreSelect />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
            <Route path="/designs" element={<Designs />} />
            <Route path="/skating" element={<Skating />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/item_preview" element={<ItemPreview />} />
            <Route path="/login" element={<Login />} />
            <Route path="/store_admin" element={<StoreAdmin />} />
          </Routes>
          <Underbar/>
          <Footer />
         </Router>   
      </div>
  )};

export default App;
