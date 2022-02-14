import React from 'react'

export const TodoItem = ({todo,onDelete}) => {
  let cStyle={
    width: "20rem"
  }
  return (
    
      
    <div className="card   shadow p-3 mb-5 bg-white rounded" style={cStyle}>
    <div className="card-body">
      <h4 className="card-title">{todo.title}</h4>
      <p className="card-text text-success">{todo.desc}</p>
      <button className="btn btn-danger btn-sm" onClick={()=>{onDelete(todo)}}>Delete</button>
    
      
    </div>
  </div>
  )
}
