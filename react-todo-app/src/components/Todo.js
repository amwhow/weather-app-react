import React from 'react' 

function Todo( {todo} ) {
  return (
    <>
      <input type="checkbox" />
      <li
        style={{
          color: "blue";
          textDecoration: todo.completed? "line-through" : null;
        }}
      >{todo.task}</li>
      <button>X</button>
    </>
  );
}

export default Todo;