import React from 'react'
import { toast } from 'react-toastify'

export const TodoItem = ({todo,deleteTodo,id}) => {
  return (
    <div className='todo-item'>
                <p>{todo}</p>
                <i class='fa fa-times-circle' 
                onClick={()=>{
                    deleteTodo(id)
                    toast.error('Todo Deleted!')
                }}></i>
            </div>
  )
}
