import { Navbar, Footer, UnderbarHeader, UnderbarFooter } from './components/core/core.js';
import {HashRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/home/home.js';
import { Store, StoreSelect } from './components/store/store.js';
import { Collection2022, Collection2023 } from './components/collections/collections.js';
import Payment from './components/payment/payment.js';
import About from './components/about/about.js';
import Success from './components/payment/post_payment.js';
import Skating from './components/skating/skating.js';
import Designs from './components/designs/designs.js';
import Checkout from './components/checkout/checkout.js';
import Basket from './components/basket/basket.js';
import ItemPreview from './components/item_preview/item_preview.js';
import Login from './components/login/login.js';
import StoreAdmin from './components/store_admin/store_admin.js';
import css from './App.module.css';
import { StateProvider } from './components/state_management/context.js'
import { loadStripe } from "@stripe/stripe-js";
// import dotenv from 'dotenv';
// import path from 'path';


function App () {

// const dotenv = require('dotenv');
// const path = require('path');
// const envPath = path.resolve(__dirname, '../.env');
// dotenv.config({ path: envPath });
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);
// console.log(dotenv)

const stripePromise_test = loadStripe("pk_test_51MphC6DH2VJ3YG9vNnyjTZ0fwf80k41FTWT0JvBUeF6SILu59mozZHSHJfxIdanpXNee3VR9UbUpIfNZ7qGguBQ600fwMA2Q9r");
// const stripePromise = loadStripe("pk_live_51MphC6DH2VJ3YG9vqxHK5GgKxE9bdmFvri83q5w5A6rIYTAAAqMfXUJoi5q0flDJ2PaNL2BLAq3rmfGiSWbQbT1000tjUe0pLj");


 return (                                                     
    <div className={css.App}>
      <StateProvider>
        <Router >  
        <Navbar/>
        <UnderbarHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store_selection" element={<StoreSelect />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/designs" element={<Designs />} />
          <Route path="/skating" element={<Skating />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/item_preview" element={<ItemPreview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/store_admin" element={<StoreAdmin />} />
          <Route path="/collection_2022" element={<Collection2022 />} />
          <Route path="/collection_2023" element={<Collection2023 />} />
          <Route path="/payment" element={<Payment stripePromise={stripePromise_test} />} />
          <Route path="/payment_success" element={<Success stripePromise={stripePromise_test} />} />
        </Routes>
        <UnderbarFooter/>
        <Footer />
        </Router>   
      </ StateProvider>
    </div>
  )};

export default App;
