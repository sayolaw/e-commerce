import React from 'react'
import Sidebar from './Components/sidebar'
import ProductArea from './Components/productarea'
import p1 from './Images/ProductImages/wimg1.jpg.webp'
import p2 from './Images/ProductImages/wimg2.jpg.webp'
import p3 from './Images/ProductImages/wimg3.jpg.webp'
import p4 from './Images/ProductImages/wimg4.jpg.webp'
import p5 from './Images/ProductImages/wimg5.jpg.webp'
import { useState } from 'react'
export default function WoMen({addToCart}) {
  const baseline = [{
    "id": 1,
  "image": p1,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 32.99,
  "color": "red"
},
{
  "id": 2,
  "image": p2,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 22.99,
  "color": "red"
},
{
  "id": 3,
  "image": p3,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 32.99,
  "color": "blue"
},
{
  "id": 4,
  "image": p3,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 17.99,
  "color": "orange"
},
{
  "id": 5,
  "image": p4,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 23.99,
  "color": "blue"
}]
  const [products,setProducts] = useState( [{
    "id": 1,
  "image": p1,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 32.99,
  "color": "red"
},
{
  "id": 2,
  "image": p2,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 22.99,
  "color": "red"
},
{
  "id": 3,
  "image": p3,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 32.99,
  "color": "blue"
},
{
  "id": 4,
  "image": p5,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 17.99,
  "color": "orange"
},
{
  "id": 5,
  "image": p4,
  "name" : "Nike Tee",
  "type" : "TEE - PRINTED T-SHIRT",
  "price": 23.99,
  "color": "blue"
}]);
  
function filterColor(color){
  console.log(color)
  var newProducts = baseline.filter((e)=>e.color==color
  )
  // console.log(newProducts);
  setProducts(newProducts,() =>{
    console.log(products)
  })
}
  return (
    <div className='about col-11 mx-auto'>
        <h3  className='text-center' style={{"font-weight":"bold"}}>WOMEN'S T-SHIRTS</h3>
        <div className='area row p-3 justify-content-between'>
        <Sidebar filterMe = {filterColor} />
        <ProductArea addToCart={addToCart}  products={products}/>
        </div>
    </div>
  )
}
