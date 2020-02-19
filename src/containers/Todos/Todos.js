import React, { Component } from 'react';

import Todo from '../../components/Todo/Todo';
import AddTodo from '../../components/AddTodo/AddTodo';

export default class Todos extends Component {

  state = {
    todos: [
      {
        title: 'todo1',
        completed: false,
      },
      {
        title: 'todo1',
        completed: false,
      }
    ]
  }

  render() {
    const todoStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={todoStyle}>
        <AddTodo />
        {this.state.todos.map(todo => {
          return <Todo todo={todo.title} />
        })}
      </div>
    )
  }
}
