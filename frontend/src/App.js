import { Navbar, Footer, UnderbarHeader, UnderbarFooter } from './components/core/core.js';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js';
import { Store, StoreSelect } from './components/store/store.js';
import { Collection2023, Collection2024 } from './components/collections/collections.js';
import Payment from './components/payment/payment.js';
import LearnMore from './components/learn_more/learn_more.js';
import Success from './components/payment/post_payment.js';
import Gallery from './components/gallery/gallery.js';
import Checkout from './components/checkout/checkout.js';
import Basket from './components/basket/basket.js';
import ItemPreview from './components/item_preview/item_preview.js';
import Login from './components/login/login.js';
import Contact from './components/contact/contact.js';
import StoreAdmin from './components/store_admin/store_admin.js';
import css from './App.module.css';
import { StateProvider } from './components/state_management/context.js'
import { loadStripe } from "@stripe/stripe-js";


function App () {

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

 return (                                                     
    <div className={css.App}>
      <StateProvider>
        <Router >  
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store_selection" element={<StoreSelect />} />
          <Route path="/store" element={<Store />} />
          <Route path="/learn_more" element={<LearnMore />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/item_preview" element={<ItemPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store_admin" element={<StoreAdmin />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/2023" element={<Collection2023 />} />
          <Route path="/2024" element={<Collection2024 />} />
          <Route path="/payment" element={<Payment stripePromise={stripePromise} />} />
          <Route path="/payment_success" element={<Success stripePromise={stripePromise} />} />
        </Routes>
        </Router>   
      </ StateProvider>
    </div>
  )};

export default App;
