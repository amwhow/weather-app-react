import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const LOCAL_STORAGE_KEY = 'react-todo-app';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(storageTodos) {
      setTodos(storageTodos)
    }
  }, []);

  // store the todo listings to a local json file
  useEffect(() => {
    // effect
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  };

  function togglecomplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React Todo App</p>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          togglecomplete={togglecomplete}
          removeTodo={removeTodo}
        />
      </header>
    </div>
  );
}

export default App;
