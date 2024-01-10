import React, { useState } from 'react'

export default function AddTask({addtask}) {
    const [value,setValue]=useState('');
    const additem=()=>{
        addtask(value);
        setValue("")
    }
  return (
    <>
    <div className='input-container' >
        <input className='bg-white hover:bg-white text-black font-bold py-2 px-4 rounded w-full' type="text" placeholder='Add a new Task'
        value={value}
        
        onChange={(e)=>{setValue(e.target.value)}}
        
        />
        <div className='flex items-center justify-center w-full p-3' >
        <button onClick={additem} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>ADD</button>
        </div>
        
    </div>
    </>
  )
}
