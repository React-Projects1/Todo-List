import React, { useState } from 'react'

const EditTodoForm = ({ task, editTask }) => {
  const [value, setValue] = useState(task.task)
  const handelChage = e => setValue(e.target.value)
  const handelSubmit = e => {
    e.preventDefault()
    editTask(value, task.id)
    setValue('')
  }
  return (
    <form className='TodoForm' onSubmit={handelSubmit}>
      <input type='text' className='todo-input' placeholder='Update Task ...' onChange={handelChage} value={value} />
      <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm
