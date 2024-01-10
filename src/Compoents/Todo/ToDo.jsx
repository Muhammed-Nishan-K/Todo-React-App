import React, { useState } from 'react'
import AddTask from './AddTask'
import ListTask from './ListTask'

export default function ToDo() {
  const [task,setTask]=useState([])
  const addTask=(name)=>{
      const newTask=[...task,{id:task.length+1,name:name}];
      setTask(newTask);

  }
  const removeTask=(index)=>{
    const newTask=[...task];
    newTask.splice(index,1);
    setTask(newTask)
  }
  return (
    <>
    <div  className='w-full h-full  flex items-center justify-center mt-10'>
    <div className='bg-black w-96 h-auto rounded-2xl block mt-10'>
      <div className=' text-white flex items-center justify-center text-2xl p-3'>TODO APP</div>
      <div className=' text-white flex items-center justify-center '>
        <AddTask addtask={addTask}/>
      </div>
      <div className=' text-white flex items-center justify-center '>
            <ListTask tasks={task} removeTask={removeTask}/>

        </div> 

    </div>
    </div>
    
    </>
  )
}
