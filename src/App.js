import logo from './logo.svg';
import './App.scss';
import Navbar from './Components/navbar.js'
import Home from './Home.js'
import Men from './About.js'
import Women from './Women.js'
import Layout from "./Layout";
import Portions from './Components/portions.js'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import p3 from './Images/ProductImages/p3.jpg'
import p1 from './Images/ProductImages/p1.jpg'
import p2 from './Images/ProductImages/p2.jpg'

var jCart = []
function App({addToCart}) {
  const [cart,setCart] = useState(true);
  const [basket,setBasket] = useState(jCart);
  function displayCart(){
    setCart(!cart);
    var myCart = document.getElementsByClassName('cart')
    if(cart==true){
      myCart[0].style.display = 'block'
    }
    else{
      myCart[0].style.display = 'none'
    }

  }
  function addToCart(product){
        
        var newBasket = basket;
        var check = newBasket.find((e)=>e.id == product.id)
        console.log(check);
        if(check == undefined){
          product.count = 1;
        var newProducts = [...basket,product]
        setBasket(newProducts)
        jCart = newProducts
        console.log(jCart)
        
      }
      else{
        check.count = check.count+1;
        setBasket(newBasket)
        
      }
      
        
    }
    function removeFromCart(product){
      var newProducts = basket.filter((i)=>i.id != product.id)
      setBasket(newProducts);
  }
  function addCount(product){
    // var newProduct = basket
    var newProduct = basket.map((i)=>{
      
      if(i.id == product.id){
         i.count = i.count+1
      
         return i
        
      }
      return i
    })
   
    setBasket(newProduct);
}
function removeCount(product){
  // var newProduct = basket
  var newProduct = basket.map((i)=>{



    if(i.id == product.id){
      if(i.count>1){
       i.count = i.count-1
       return i
      }
      else{
  
      }
      
    }
    return i
  
  
  })
 
  setBasket(newProduct);
}
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout addCount={addCount} removeCount={removeCount} displayCart = {displayCart} removeFromCart = {removeFromCart}  basket ={basket} />}>
          <Route index element = {<Home />} />
          <Route path="about" element = {<Men addToCart ={addToCart} />} />
          <Route path="women" element = {<Women addToCart ={addToCart} />} />
      </Route>
      </Routes>
     
  
    </BrowserRouter>
  );
}

export default App;
