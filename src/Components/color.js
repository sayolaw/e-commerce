import React from 'react'

export default function color({myColor,filterMe}) {
  return (
    <div onClick={()=>filterMe(myColor.name)} className='color col-auto m-3' style={{"backgroundColor":myColor.name,"width":"35px","height":"35px","border-radius":"50%","box-shadow":"3px 3px 8px -4px","cursor":"pointer"}}></div>
  )
}
