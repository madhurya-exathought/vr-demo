import React from 'react'
import { Entity } from 'aframe-react'

const SoundEntity:React.FC<string>=(src) => {
  return (
   <Entity sound="src: #river; autoplay: true; loop: false" />
  )
}

export default SoundEntity
