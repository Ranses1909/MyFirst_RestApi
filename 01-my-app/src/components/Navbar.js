import React from 'react';
import logo from '../keyboard2.svg'
import {BsSearch, BsCart} from 'react-icons/bs'

export default function Navbar() {
    return (
        <nav className="navbar"> 
                  <img src={logo} alt="keyboard logo" className="logo"/>
           <div className="form-search">
              <input type="text" className="search"/>
                  <button className="btn-search"> 
                  <BsSearch className="bs-search"></BsSearch>
                  </button>
                  <button className="btn-cart">
                  <BsCart className="tbshop-cart"> </BsCart>
                  </button>
             </div> 
              </nav>
            

           
             
     
    )

}