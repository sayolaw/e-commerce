import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Import the Font Awesome core styles
import '@fortawesome/fontawesome-free/css/solid.css'; // Import the Solid style icons
import '@fortawesome/fontawesome-free/css/brands.css'; // 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Handle({name,handleClick,myicon}) {
  return (
    <div className='handle row col-12 justify-content-between align-items-center m-0 p-0 mb-2' >
        
            <h3 className='handle-name col-10 m-0 p-0'  >{name}</h3>
            
            <FontAwesomeIcon icon={myicon} onClick={handleClick} className='col-auto ' style={{"cursor":"pointer"}}/>

    </div>
  )
}
