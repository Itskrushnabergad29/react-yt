import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='h-full p-6 overflow-x-auto rounded-4xl w-2/3 flex flex-nowrap gap-10'>
      {props.users.map(function(elem,idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag}></RightCard>
      })}
    </div>
  )
}

export default RightContent
