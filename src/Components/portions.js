import React from 'react'
import NavLine from './navline.js'
import Content from './content.js'

export default function Portions({myClass}) {
  return (
    <div className={myClass}>
    <NavLine />
    <Content />
    </div>
  )
}
