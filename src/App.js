import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
  } from "react-router-dom";

import Home from './Pages.js/Home';
import About from './Pages.js/About';
import ContactUs from './Pages.js/ContactUs';
import Information from './Pages.js/Information';

import logo from './logo.png';
import cart from './cart.png';



function App() {
   
return (<div>

<Router>
  <nav>
    <div className="header-body">
      
<Link to='/'> <div className="navBarBrend">                       
                        <img className="logo" 
                        src={logo} 
                        width="100px" 
                        height="70px" 
                        alt="Logo"/>
                        </div>
                        </Link>
                <div class="header__burger active">
            <span>
                 <img src="Burger.png" width="35px" alt=''/>
                 <img src="Burger-lock.png" width="35px" alt=''/>
            </span>
                </div>

 <div className="navbar active">
  <Link to="/" className='logo'></Link>
  <Link to="/" className='link' aria-current="page">HOME</Link>
  <Link to="/about" className='link' aria-current="page">ABOUT US</Link>
  <Link to="/information" className='link' aria-current="page">INFORMATION</Link>
  <Link to="/contactUs" className='link' aria-current="page">CONTACTS</Link>
   
  <div className="btn-link">
                            <button href="/cart" variant="link" >                            
       <p className="itemsInACart">0</p>
        <img id="cartIcon" src={cart} width="60px" height="60px" alt="Cart" /> 
          </button> 
          </div>
          </div>
          </div>
  </nav>
  <Routes> 
  <Route path="/" element= {<Home />} />
  <Route path="/about" element= {<About />} /> 
  <Route path="/information" element= {<Information />} /> 
  <Route path="/contactUs" element= {<ContactUs />} /> 
  </Routes>
  
  </Router>

  
{/*  <Promo />
  <div className="content">
        <h1 className="inf">All our flowers</h1>
    </div>
   
    <Buttons filteredFlowers={chosenFlower}/>
    <Flowers itemForSale={flower}/>
    <Carousel />    */} 
  

 </div>
)
}

export default App;

















