import React from 'react';
import logo from '../keyboard2.svg'
import {BsSearch, BsCart} from 'react-icons/bs'
import { useGlobalContext} from '../context'

export default function Navbar() {

  const searchValue = React.useRef('')
  
const formHandler=(e) =>{
e.preventDefault()
  }

    return (
        <nav className="navbar"> 
                  <img src={logo} alt="keyboard logo" className="logo"/>
           <div className="form-search">
           <form onSubmit={formHandler}>
              <input
               name="name"
               id='name'
               className="search" 
               type="text" 
               ref={searchValue}
               />

                  <button className="btn-search"> 
                  <BsSearch className="bs-search"></BsSearch>
                  </button>
                  <button className="btn-cart">
                  <BsCart className="tbshop-cart"> </BsCart>
                  </button>
            </form>
             </div> 
              </nav>
      
      
            

           
             
     
    )

}