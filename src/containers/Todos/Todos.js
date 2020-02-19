import React, { Component } from 'react';

import Todo from '../../components/Todo/Todo';
import AddTodo from '../../components/AddTodo/AddTodo';
import './Todos.css';

export default class Todos extends Component {

  state = {
    todos: []
  }

  newTodoHandler = (todoText) => {
    const todo = { todoTitle: todoText, completed: false };
    const wholeTodos = [...this.state.todos, todo];
    this.setState({ todos: wholeTodos });
  }

  completeTodoHandler = (todoText) => {
    const currentTodos = this.state.todos;
    currentTodos.forEach(element => {
      if (element['todoTitle'] === todoText) {
        element['completed'] = !element['completed']
      }
    });
    this.setState({ todos: currentTodos });
  }

  render() {
    return (
      <div>
        <AddTodo newTodo={this.newTodoHandler} />
        <ul>
          {this.state.todos.map((todo, index) => {
            return <Todo todo={todo.todoTitle}
              key={index}
              updateTodo={this.completeTodoHandler}
              completed={todo.completed} />
          })}
        </ul>
      </div >
    )
  }
}
