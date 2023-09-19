import React from 'react'
import p3 from '../Images/ProductImages/p3.jpg'
import p1 from '../Images/ProductImages/p1.jpg'
import p2 from '../Images/ProductImages/p2.jpg'
import { faAdd, faMinus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function Item({myItem,removeFromCart,addToCart,addCount,removeCount}) {
  return (
    <div className='item row justify-content-between mb-5'>
       <div className='item-image col-3'>
        <img className='col-12' src= {myItem.image} />
        </div>
        <div className='properties col-3'>
        <p style={{"margin-bottom":"2px","font-size":"15px","font-weight":"600"}}>{myItem.name}</p>
        <p style={{"color":"grey","font-size":"13px"}}>{myItem.type}</p>
        </div>
        
        <div className="controls row col-3">
        <FontAwesomeIcon style={{"font-size":"15px","margin-top":"3px","cursor":"pointer","color":"black"}}
        onClick={()=>removeCount(myItem)}
        className="col minusIcon" icon={faMinus}
        
        ></FontAwesomeIcon>
        <p className='col text-center'>{myItem.count}</p>
        <FontAwesomeIcon 
        style={{"font-size":"15px","margin-top":"3px","cursor":"pointer"}} 
        className="col" 
        icon={faAdd}
        onClick={()=>addCount(myItem)}>

        </FontAwesomeIcon>
        </div>
        <p className='col text-end'>${myItem.price}</p>
        <FontAwesomeIcon style={{"font-size":"18px","margin-top":"3px","cursor":"pointer"}} className="col" icon={faXmark}
        onClick = {()=>removeFromCart(myItem)}
        ></FontAwesomeIcon>
    </div>
  )
}
