import React from 'react'
import Todo from './Todo'

function TodoList({ todos, togglecomplete, removeTodo}) {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} togglecomplete={togglecomplete} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
}

export default TodoList;