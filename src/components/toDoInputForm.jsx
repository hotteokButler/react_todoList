import React, { Component } from 'react';

class ToDoInputForm extends Component {
  onSubmitTodo = React.createRef();

  getToDos = (event) => {
    event.preventDefault();
    const newTodo = this.onSubmitTodo.current.value;
    this.props.setTodo(newTodo);
    this.onSubmitTodo.current.focus();
    this.onSubmitTodo.current.value = '';
  };

  render() {
    return (
      <form action="" className="toDoLi_inputForm" onSubmit={this.getToDos}>
        <input type="text" ref={this.onSubmitTodo} name="toDoData" className="toDoLi_inputText" />
        <button className="toDoLi_button">Add</button>
      </form>
    );
  }
}

export default ToDoInputForm;
