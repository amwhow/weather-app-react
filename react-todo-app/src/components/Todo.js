import React from 'react' 
import Button from 'react-bootstrap/Button';

function Todo( {todo, togglecomplete, removeTodo } ) {
  function handleCheckboxClick() {
    togglecomplete(todo.id);
  }

  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  return (
    <div style={{ 
      display:"flex",
      justifyContent:"center" }}>
      <input type="checkbox" onClick={handleCheckboxClick}/>
      <li
        style={{
          listStyle: "none",
          textDecoration: todo.completed? "line-through" : null,
        }}
      >{todo.task[0].toUpperCase()+todo.task.slice(1)} -- {todo.date}</li>
      <Button onClick={handleRemoveClick} size="sm">x</Button>
    </div>
  );
}

export default Todo;