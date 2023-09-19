import React from "react";
import {Outlet} from "react-router-dom";
import Navbar from "./Components/navbar";
import { useState } from "react";
import Cart from "./Components/cart";


const Layout = ({displayCart,basket,removeFromCart, addCount,removeCount}) => {
     
  return (
    <>
      <Navbar myCart={displayCart} />
      <Cart myCart={displayCart} removeFromCart = {removeFromCart}  removeCount={removeCount} basket = {basket} addCount={addCount} />
      <Outlet />
    </>
  );
};

export default Layout;