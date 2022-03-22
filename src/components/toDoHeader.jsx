import React, { PureComponent } from 'react';

class ToDoHeader extends PureComponent {
  render() {
    return (
      <header className="header">
        <p className="toDoLi_titleIcon">
          <i className="fa-solid fa-file-pen"></i>
        </p>
        <h1 className="toDoLi_title">To Do List</h1>
        <p className="toDoLi_countAll">{this.props.countAllList}</p>
      </header>
    );
  }
}

export default ToDoHeader;
