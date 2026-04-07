import React from 'react'

const App = () => {

  const submitHnadler = (e) =>{
    e.preventDefault();
    console.log('Form submitted');
    
  }
  return (
    <div>
      <form onSubmit={(e) =>{submitHnadler(e)}}>
        <input type="text" placeholder='Enter Name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
