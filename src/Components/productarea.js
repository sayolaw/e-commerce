import React from 'react'
import Product from './Product'
import { useState } from 'react'


export default function ProductArea({products,addToCart}) {

  return (
  
    <div className='productArea row col-8 mx-auto m-0 p-0  align-items-center '>
      {products.map((product,key)=>{
        return(
        <Product myProduct={product}  addToCart={addToCart} />)
      })}

    
    </div>
  )
}
