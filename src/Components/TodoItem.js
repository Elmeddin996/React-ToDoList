import React from 'react'

function TodoItem(props) {
  const {task}=props
  return (
    <h1>{task}</h1>
  )
}

export default TodoItem