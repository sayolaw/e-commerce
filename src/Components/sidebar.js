import React from 'react'
import Handle from './handle'
import Brands from './brand'
import Colors from './color'
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/fontawesome.css'; // Import the Font Awesome core styles
import '@fortawesome/fontawesome-free/css/solid.css'; // Import the Solid style icons
import '@fortawesome/fontawesome-free/css/brands.css'; // 
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

export default function Sidebar({filterMe}) {
  const [isVisible,setIsVisible] = useState(false);
  const [bisVisible,setBisVisible] = useState(false);
  const handleClick = () => {
   
    setIsVisible(!isVisible);
  };
  const bhandleClick = () => {
   
    setBisVisible(!bisVisible);
  };
  const brands =[{ id:1,name:"Nike"},{ id:2,name:"Addidas"},{ id:3,name:"Puma"},
  { id:4,name:"Gucci"},]
  const colors =[{ id:3,name:"black"},{id:6,name:"white"},{ id:1,name:"red"},{ id:2,name:"blue"},
  { id:4,name:"green"},{id:5,name:"orange"}]
  return (
    <aside className='sidebar col-3 mr-4' >
      <div className='gender'>
      <Handle handleClick={handleClick} name="SEX" myicon={isVisible? faChevronUp : faChevronDown}/>

      <div className={ isVisible?'drawer fade-in-out':'drawer fade-in-out hide mb-4'}>
      <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">
            Men
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Women
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" for="flexRadioDefault2">
            Other
          </label>
        </div>
      </div>
      <hr></hr>
      </div>
      <div className='gender'>
      <Handle handleClick={bhandleClick} name="BRAND" myicon={bisVisible? faChevronUp : faChevronDown}/>

      <div className={ bisVisible?'drawer fade-in-out':'drawer fade-in-out hide mb-4'}>
      {brands.map((brand,key)=>{
        return(
        <Brands brand={brand} />)
      })}

</div>
     
      <hr></hr>
      </div>
      <div className='gender'>
      <Handle handleClick={bhandleClick} name="COLOR" myicon={bisVisible? faChevronUp : faChevronDown}/>

      <div className={ bisVisible?'drawer row fade-in-out':'drawer fade-in-out hide mb-4'}>
      {colors.map((myColor,key)=>{
        return(
        <Colors myColor={myColor} filterMe = {filterMe} />)
      })}

</div>
     
      <hr></hr>
      </div>
    </aside>
  )
}
