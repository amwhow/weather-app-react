import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
import Button from 'react-bootstrap/Button';

function TodoForm ( props ) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    date: "",
    completed: false,
  });

  function handleTaskInputChange(e) {
    setTodo({ ...todo, task: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {...todo, id: uuid(), date: new Date().toLocaleDateString()}
    console.log(newTodo)
    if (todo.task.trim()) {
      props.addTodo(newTodo)
      setTodo({ ...todo, task: ""})
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
      <Button type="submit">submit</Button>
    </form>
  )
}

export default TodoForm;