import React, { useState } from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'
import EditTodoForm from './EidtTodoForm'
import { v4 as uuid4 } from 'uuid'
uuid4()

const TodoWrapper = () => {
  const [todos, setTodos] = useState([])
  const addTodo = todo => {
    setTodos([...todos, { id: uuid4(), task: todo, completed: false, isEditing: false }])
  }
  const toggleComplete = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }
  const deleteTodo = id => {
    setTodos(todos.filter(todo => (todo.id !== id ? todo : '')))
  }
  const editTodo = id => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo)))
  }
  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className='TodoWrapper'>
      <h1>Get Things Done !</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => todo.isEditing ? (
        <EditTodoForm task={todo} key={index}  editTask ={editTask}/>
      ) : (
        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />
      )
      )}
    </div>
  )
}

export default TodoWrapper
