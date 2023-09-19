import React from 'react'
import bg from '../Images/bg.jpg'
import bg2 from '../Images/bg2.jpg'

export default function Hero() {
  return (
    <div className='hero d-flex flex-column justify-content-center' style={{backgroundImage:`url(${bg})`}}>
    <h2 className='mb-3 p-0 ml-0'>WEAR WHAT YOU WANT</h2>
    <p className='mb-5 p-0 ml-0'>placeholder plachgjg jgjg jg jj jhjh jhjhhghg
        hfhfh jgjg jgjg jjghjh jkjh
    </p>
    <div className='myButton justify-content-center align-items-center row m-0 p-0'> 
    <p className='m-0 p-0'>
      New Collection</p>
    </div>
        
    </div>
  )
}
