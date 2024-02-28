import React, { useState } from 'react';

const TodoApp = () => {

  const[state,setState]=useState('')
  const[Task,setTask]=useState({value:" ",
  tasks:[]})
  const[cTask,setcTask]=useState({value:" ",
  tasks:[]})

const addTask=()=>{
  if(state.trim() !== ""){
  setTask({value:" TASKS ", tasks:[state,...Task.tasks]})
  setState(" ")
}}
const Remove=(index)=>{
 const x = Task.tasks.splice(index,1)
 setTask({value:" TASKS ", tasks:[...Task.tasks]})

  setcTask({value:" COMPLETED-TASKS ", tasks:[x,...cTask.tasks]})

}
  return (
    <div className='ku'>  
       <h1>TODO APP</h1>
   <input  value={state} onChange={e=>setState(e.target.value)} />
   <button onClick={addTask}>ADD TASk</button>
   <h1>{Task.value}</h1>
   {Task.tasks.map((task, index) => (
        <div key={index}>
          <input value={task} readOnly />
          <button onClick={()=>Remove(index)}>REMOVE</button>
        </div>
      ))}
      <h1>{cTask.value}</h1>
   {cTask.tasks.map((task, index) => (
        <div key={index}>
          <input value={task} readOnly />
          
        </div>
      ))}
   </div>

  )
};

export default TodoApp;
