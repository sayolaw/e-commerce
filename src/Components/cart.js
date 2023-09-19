import React, { useState } from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Import the Font Awesome core styles
import '@fortawesome/fontawesome-free/css/solid.css'; // Import the Solid style icons
import '@fortawesome/fontawesome-free/css/brands.css'; // 

import Item from './item'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Cart({myCart,basket,addToCart,removeFromCart,addCount, removeCount}) {

    var allItems = basket.map((i)=> <Item myItem = {i} removeFromCart = {removeFromCart} addCount={addCount} removeCount={removeCount} />)
 
  return (
    <div className='cart col-sm-9 col-lg-6 p-3'>
        <h4 style={{'cursor':"pointer"}}onClick={myCart}> <FontAwesomeIcon style={{"font-size":"13px","margin-right":"10px"}}icon={faChevronLeft}></FontAwesomeIcon>  Keep shopping</h4>
        <hr />
        <div className='title row justify-content-between mt-5'>
        <h5 style={{"font-size":"15px","font-weight":"600"}} className='col'>Cart</h5>
        <p style={{"font-size":"12px","color":"grey"}}className="col text-end"> {basket.length} items</p>
        </div>
        <div className='items mt-5'>
        {allItems}
        </div>
        
    </div>
  )
}
