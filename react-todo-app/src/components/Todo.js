import React from 'react' 

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
          color: "white",
          textDecoration: todo.completed? "line-through" : null,
        }}
      >{todo.task}</li>
      <button onClick={handleRemoveClick}>x</button>
    </div>
  );
}

export default Todo;