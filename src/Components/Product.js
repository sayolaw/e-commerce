import React from 'react'
import p1 from '../Images/ProductImages/p1.jpg'
import p2 from '../Images/ProductImages/p2.jpg'
import p3 from '../Images/ProductImages/p3.jpg'


export default function Product({myProduct,addToCart}) {
  return (
    <div className='product col-auto p-0 mb-5 g-0' >
        <img src={myProduct.image} className='mb-3' >

        </img>
        <h4 className='pName'>{myProduct.name}</h4>
        <h4 className='pType'>{myProduct.type}</h4>
        <p className='price'>${myProduct.price}</p>
        <button className="btn btn-dark btn-sm"onClick = {()=>addToCart(myProduct)} style={{"font-size":"15px","font-weight":"500","cursor":"pointer"}}>Add To Cart</button>
    </div>
  )
}
