import React from 'react'

export const TodoList = ({todos}) => {
  return (
   <div className="todo-container">
        {todos.map((todo,index) =>(
            <div key={index} className='todo-item'>
                <p>{todo}</p>
                <i class='fa fa-times-circle'></i>
            </div>
        ))}
   </div>
  )
}
