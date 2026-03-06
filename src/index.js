import React from 'react';
import './index.css';
import ReactDOM from "react-dom/client"; 
import {BrowserRouter, Routes, Route} from "react-router-dom"; 
import HomePage from './landing_page/home/HomePage';
import Signup from  './landing_page/signup/signup.js';
import Login from './landing_page/login/login.js';
import About from './landing_page/about/About.js'
import Pricing from './landing_page/pricing/PricingPage.js';
import Support from './landing_page/support/SupportPage.js';
import Product from './landing_page/products/Universe.js';
import TradingQA from './landing_page/tradingqa/TradingQA.js';
import LearnMore from './landing_page/learnmore/LearnMore.js';
import NotFound from './NotFound.js';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
     <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/support" element={<Support />} /> 
           <Route path="/products" element={<Product />} /> 
          <Route path="/tradingqa" element={<TradingQA />} />
          <Route path="/learnmore" element={<LearnMore />} />
          <Route path="/*" element={<NotFound />} />

        </Routes>
       <Footer/>
    </BrowserRouter>
           
  

  

);


