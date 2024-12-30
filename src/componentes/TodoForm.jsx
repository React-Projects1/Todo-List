import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("")
  const handelChage = e => setValue(e.target.value)
  const handelSubmit = e => {
    e.preventDefault()
    addTodo(value)
    setValue('')
  }
  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
      <input type='text' className='todo-input' placeholder='What is the task today?' onChange={handelChage} value={value} />
      <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}

export default TodoForm
