import React from "react";
import {Link} from "react-router-dom";
function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom p-3">
        <a className="navbar-brand ms-5" href="#3" >
          <img src="media/logo.svg"  style={{width:"25%"}} alt="logo" />
        </a>
       
         <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
          
          <form className="form-inline ms-5 my-lg-0">
            <ul className="navbar-nav ms-5">
            <li className="nav-item active ">
              <Link className="nav-link " to="/signup" style={{color:"black"}}>
                Signup
              </Link>
            </li>
            <li className="nav-item active ms-5">
              <Link className="nav-link" to="/about" style={{color:"black"}}>
               About
              </Link>
            </li>
            <li className="nav-item active ms-5">
              <Link className="nav-link" to="/products" style={{color:"black"}}>
                Products
              </Link>
            </li>
            <li className="nav-item active ms-5">
              <Link className="nav-link" to="/pricing" style={{color:"black"}}>
                Pricing
              </Link>
            </li>
             <li className="nav-item active ms-5">
              <Link className="nav-link" to="/support" style={{color:"black"}}>
                Support
              </Link>
            </li>
             <li className="nav-item active ms-5">
              <a className="nav-link" href="" style={{color:"black"}}>
            <i className="fa-solid fa-bars"></i>
              </a>
            </li>
            </ul>
          </form>
         </div> 
      </nav>
    
  );
}

export default Navbar;
