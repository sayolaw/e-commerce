import React from 'react'
import Hero from './Components/hero.js'
import Portions from './Components/portions.js'

export default function Home() {
  return (
    <div>
    <Hero  />
    <Portions  myClass="portions " />
    <Portions  myClass="portions a" />
    <Portions myClass="portions "  />
    <Portions  myClass="portions a " />
    </div>
  )
}
