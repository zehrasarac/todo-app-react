import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({todos,deleteTodo}) => {
  return (
   <div className='todo-container'>
        {todos.map((todo,index) =>(
            <TodoItem id={index} todo = {todo} key={index} deleteTodo={deleteTodo}/>
        ))}
   </div>
  )
}
