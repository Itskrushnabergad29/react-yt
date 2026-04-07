import React from 'react'
import { X } from 'lucide-react';
import { useState } from 'react';

const App = () => {


  const [Title, setTitle] = useState('')
  const [Details, setDetails] = useState('')

  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({Title,Details})

    settask(copyTask)
    setTitle('')
    setDetails('')
  }

  
  return (
    <div className='min-h-screen bg-black text-white flex flex-col lg:flex-row'>      
    <form onSubmit={(e) => {submitHandler(e)}} className='lg:w-1/2 flex justify-start items-start p-10 gap-4 flex-col '>
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input className="px-5 py-2 font-medium w-full  border-2 outline-none rounded " type="text" placeholder='Enter Title' value={Title} onChange={(e) =>{setTitle(e.target.value)}} />
        <textarea className="px-5 font-medium w-full h-32 py-2 border-2 flex items-start flex-row outline-none rounded " type="text" placeholder='Enter Details' value={Details} onChange={(e) => {setDetails(e.target.value)}} />
        <button className='bg-white active:scale-95 font-medium w-full text-black outline-none px-5 py-2 rounded'>Add Note</button>

      </form >
      <div className='lg:w-1/2 p-10 lg:border-l-2 '>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 h-full overflow-auto'>
            {task.map(function(elem,idx){
              return <div key={idx} className='h-52 w-40 relative text-black p-4 rounded-2xl bg-[url(https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdHAyNDctZWxlbWVudC0wMDI1YS1rem94azZjcy5wbmc.png)]'>
                <h2 className='absolute top-5 right-5 bg-red-500 p-1 text-xs rounded-full'><X strokeWidth={3} /></h2>
                <h3 className='leading:tight text-xl font-bold'>{elem.Title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.Details}</p>
              </div>
         
            })}

        </div>
      </div>
    </div>
  )
}

export default App
