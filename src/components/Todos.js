import React from 'react'
import {TodoItem} from './TodoItem.js';

export const Todos = ({todos,onDelete}) => {
  let myStyle={
    minHeight:"70vh"
  }
  return (
    <>
    <div className='container my-3'  style={myStyle}>
      <h3 className=' my-3'>Todos List</h3>
      {(todos.length===0)?"No Todo To Display":
      todos.map((todo)=>{
        return   <TodoItem todo={todo} key={todo.sno} onDelete={onDelete}/>
        ;
      })}
     
    </div>
    
    </>
  )
}
