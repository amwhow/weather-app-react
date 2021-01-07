import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
// import App from '../App'

function TodoForm ( props ) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {...todo, id: uuid()}
    if (todo.task.trim()) {
      props.addTodo(newTodo)
      setTodo({ ...todo, task: "" })
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  )
}

export default TodoForm;