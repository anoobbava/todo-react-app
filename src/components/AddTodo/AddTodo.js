import React, { Component } from 'react';

class AddTodo extends Component {

  state = {
    text: ''
  }

  addNewTodo = () => {
    this.props.newTodo(this.state.text);
    this.setState({ text: '' });
  }

  todoTextHandler = (event) => {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text"
          value={this.state.text}
          onChange={this.todoTextHandler}></input>
        <button onClick={this.addNewTodo}>Add todo</button>
      </div >
    )
  }
}

export default AddTodo;
