import React from 'react'
import { useState } from 'react'


const App = () => {
  const [num, setNum] = useState(2)
  function IncreaseNum(){
    setNum(num+1);
  }

  function DecreaseNum(){
    setNum(num-1);
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={IncreaseNum}>increase</button>
      <button onClick={DecreaseNum}>decrease</button>
    </div>
  )
}

export default App

