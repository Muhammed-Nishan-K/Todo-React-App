import React from 'react'

export default function ListTask({tasks,removeTask}) {
 
    
  return (
    <>
            <div className='w-full p-7 input-container-1 mb-2 mt-2'>
            <h2 className='w-full text-center text-2xl p-2 bg-yellow-500 rounded'>Task List</h2>
            <ul className='w-full'>
                {tasks.map((task,index) => (
                  <li key={task.id} className='flex justify-between w-full p-2'>
                  <span><img width="30" height="30" src="https://img.icons8.com/ios-glyphs/30/FFFFFF/full-stop--v2.png" alt="full-stop--v2"/></span>
                    <p className='w-2/4 h-auto'>{task.name}</p>
                    <button onClick={()=>{
                      removeTask(index)
                    }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'>Delete</button>
                </li>
                ))}
            </ul>
            </div>
            
    </>
    
  )
}
