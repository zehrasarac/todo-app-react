import { TodoForm } from "./components/TodoForm";
import { useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const[todos,setTodos]=useState(["Zehra","Zehra2"])
  return (
    <>
    <TodoForm setTodos={setTodos} todos={todos}/>
    <TodoList todos={todos}/>
    </>
  );
}

export default App;
