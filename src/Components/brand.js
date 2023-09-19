import React from 'react'

export default function brand({brand}) {
  return (
    <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" for="flexCheckDefault">
      {brand.name}
    </label>
  </div>
  )
}
