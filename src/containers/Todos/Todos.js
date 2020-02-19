import React, { Component } from 'react';

import Todo from '../../components/Todo/Todo';
import AddTodo from '../../components/AddTodo/AddTodo';

export default class Todos extends Component {

  state = {
    todos: []
  }

  newTodoHandler = (todoText) => {
    const todo = { todoTitle: todoText, completed: false };
    const wholeTodos = [...this.state.todos, todo];
    this.setState({ todos: wholeTodos });
  }

  render() {
    const todoStyle = {
      'textAlign': 'center'
    }

    return (
      <div style={todoStyle}>
        <AddTodo newTodo={this.newTodoHandler} />
        {this.state.todos.map((todo, index) => {
          return <Todo todo={todo.todoTitle}
            key={index} />
        })}
      </div>
    )
  }
}
