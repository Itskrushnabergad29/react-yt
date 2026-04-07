import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  const submitHnadler = (e) =>{
    e.preventDefault();
    console.log('Form submitted by', title);

    settitle('')
    
  }
  return (
    <div>
      <form onSubmit={(e) =>{submitHnadler(e)}}>
        <input 
        type="text" 
        placeholder='Enter Name'
        value={title} 
        onChange={(e)=>{console.log(e.target.value);


        }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

