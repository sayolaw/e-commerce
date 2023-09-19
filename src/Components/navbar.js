import React from 'react'
import { useState } from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Import the Font Awesome core styles
import '@fortawesome/fontawesome-free/css/solid.css'; // Import the Solid style icons
import '@fortawesome/fontawesome-free/css/brands.css'; // 

import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function Navbar({myCart}) {

  return (
    <header className='row col-11 mx-auto align-items-center justify-content-between m-0 p-0'>
        <div className='logo col-1 m-0 p-0'>
            <h4 className='p-0 m-0'>Logo</h4>
        </div>
        
            <ul className='nav-links col-8 row m-0 p-0'>
                <li className='col'><a href="/women">Women</a></li>
                <li className='col'><a href="/about">Men</a></li>
                <li className='col'><a href="#">Brands</a></li>
                <li className='col'><a href="#">Collections</a></li>
                <li className='col'><a href="#">Drop</a></li>
                <li className='col'><a href="#">Sale</a></li>
            </ul>
      
     
            <ul className='nav-icons col-2 row m-0 p-0'>
                
            <li className='col-auto'><a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} /></a></li>
                <li className='col-auto'><a href="#"><FontAwesomeIcon icon={faUser} /></a></li>
                <li className='col-auto'><FontAwesomeIcon icon={faCartShopping} style={{cursor:"pointer"}} onClick={myCart}/></li>
            </ul>
       

    </header>
  )
}
