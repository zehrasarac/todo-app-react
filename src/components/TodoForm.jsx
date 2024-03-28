import React from 'react'
import { useState,useEffect } from 'react';

export const TodoForm = ({setTodos,todos}) => {
const[todoValue,setTodoValue] = useState('')

    const handleSubmit = (e) => {
        setTodos([...todos,todoValue])
    }

  return (
    <form action='' id='todo-form'>
        <input 
        type='text' 
        id='form-input' 
        placeholder='please enter your todo'
        onChange={(e)=> setTodoValue(e.target.value)}
        value={todoValue}
        />
        <button
        onClick={(e) => {
            e.preventDefault()
           handleSubmit()
           setTodoValue('')
        }}
        
        >
        <i class="fa fa-plus"></i>
        </button>
    </form>
  );
};
