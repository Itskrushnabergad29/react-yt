import React from 'react'
import Arrow from './Arrow'
import HeroText from './HeroText'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 text-5xl font-bold justify-between'>
      <HeroText></HeroText>
      <Arrow></Arrow>
    </div>
    
  )
}

export default LeftContent
