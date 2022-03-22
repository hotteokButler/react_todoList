import React, { Component } from 'react';
import ToDo from './toDo';

class ToDoList extends Component {
  handleChecked = (targetId, isChecked, toDoId) => {
    this.props.onChecked(targetId, isChecked, toDoId);
  };
  handleDelete = (toDoID) => {
    this.props.onDelete(toDoID);
  };
  handleClear = () => {
    this.props.onClear();
  };
  render() {
    return (
      <>
        <ul>
          {this.props.toDos.map((toDo) => (
            <ToDo key={toDo.id} toDo={toDo} onChecked={this.handleChecked} onDelete={this.handleDelete} />
          ))}
        </ul>
        <button className="toDoLi_allClerButton" onClick={this.handleClear}>
          All Clear
        </button>
      </>
    );
  }
}

export default ToDoList;
