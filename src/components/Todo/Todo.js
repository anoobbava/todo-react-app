import React from 'react'

const Todo = (props) => {

  const passCompletedTodo = (todo) => {
    props.updateTodo(todo);
  }

  return (
    <li
      onClick={() => passCompletedTodo(props.todo)} className={props.completed ? 'checked' : null}>
      {props.todo}
    </li>
  )
}

export default Todo;
