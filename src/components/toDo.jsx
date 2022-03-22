import React, { PureComponent } from 'react';

class ToDo extends PureComponent {
  isChecked = (event) => {
    const target = event.target;
    const targetId = target.id;
    const isChecked = target.checked;
    const toDoId = this.props.toDo.id;
    this.props.onChecked(targetId, isChecked, toDoId);
  };

  setImportant = (isImportant, isCompelete) => {
    if (isImportant && !isCompelete) {
      return 'toDoLi_text toDoLi_text-important';
    } else if (!isImportant && isCompelete) {
      return 'toDoLi_text toDoLi_text-complete';
    } else if (isImportant && isCompelete) {
      return 'toDoLi_text toDoLi_text-complete toDoLi_text-important';
    } else {
      return 'toDoLi_text';
    }
  };

  handleDelete = () => {
    const toDoId = this.props.toDo.id;
    this.props.onDelete(toDoId);
  };

  render() {
    const { id, todo, isImportant, isCompelete } = this.props.toDo;
    return (
      <li className="toDoLi_list" onClick={this.isChecked} id={id}>
        <p className={this.setImportant(isImportant, isCompelete)}>{todo}</p>
        <div className="toDoLi_checkbox">
          <label>
            중요
            <input type="checkbox" name="toDoState" id="important" />
          </label>
          <label>
            완료
            <input type="checkbox" name="toDoState" id="compelete" />
          </label>
          <button className="toDoLi_delete" onClick={this.handleDelete}>
            <i className="fa-regular fa-trash-can"></i>
          </button>
        </div>
      </li>
    );
  }
}

export default ToDo;
