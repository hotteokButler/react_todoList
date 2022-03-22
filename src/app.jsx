import './app.css';
import ToDoHeader from './components/toDoHeader';
import ToDoInputForm from './components/toDoInputForm';
import ToDoList from './components/todoList';

import React, { Component } from 'react';

class App extends Component {
  state = {
    toDoList: [
      { id: 1, todo: '리액트 뿌시기!!!', isImportant: false, isCompelete: false },
      { id: 2, todo: 'Create New To Do List', isImportant: false, isCompelete: false },
    ],
  };

  setNewToDos = (todo) => {
    const toDoList = [
      ...this.state.toDoList,
      {
        id: Date.now(),
        todo,
        isImportant: false,
        isCompelete: false,
      },
    ];
    this.setState({ toDoList });
  };

  handleChecked = (targetId, isChecked, toDoId) => {
    if (targetId === 'important' && isChecked) {
      const newState = this.state.toDoList.map((list) => {
        if (toDoId === list.id) {
          return { ...list, isImportant: true };
        } else {
          return list;
        }
      });
      this.setState({ toDoList: newState });
    } else if (targetId === 'important' && !isChecked) {
      const newState = this.state.toDoList.map((list) => {
        if (toDoId === list.id) {
          return { ...list, isImportant: false };
        } else {
          return list;
        }
      });
      this.setState({ toDoList: newState });
    } else if (targetId === 'compelete' && isChecked) {
      const newState = this.state.toDoList.map((list) => {
        if (toDoId === list.id) {
          return { ...list, isCompelete: true };
        } else {
          return list;
        }
      });
      this.setState({ toDoList: newState });
    } else if (targetId === 'compelete' && !isChecked) {
      const newState = this.state.toDoList.map((list) => {
        if (toDoId === list.id) {
          return { ...list, isCompelete: false };
        } else {
          return list;
        }
      });
      this.setState({ toDoList: newState });
    }
  };

  handleDelete = (toDoId) => {
    const toDoList = this.state.toDoList.filter((list) => toDoId !== list.id);
    this.setState({ toDoList });
  };

  handleClear = () => {
    this.setState({ toDoList: [] });
  };

  viewCat = () => {
    return this.state.toDoList.length === 0 ? 'toDoLi_noList toDoLi_noList-view' : 'toDoLi_noList';
  };
  render() {
    return (
      <div className="toDoLi_wrap">
        <ToDoHeader countAllList={this.state.toDoList.length} />
        <section className="toDoLi_form">
          <ToDoInputForm setTodo={this.setNewToDos} />
          <ToDoList
            toDos={this.state.toDoList}
            onChecked={this.handleChecked}
            onDelete={this.handleDelete}
            onClear={this.handleClear}
          />
          <figure className={this.viewCat()}>
            <img src="./images/cat.jpg" alt="고앵스" />
            <p className="toDoLi_noListTxt">No More To Dos!</p>
          </figure>
        </section>
      </div>
    );
  }
}

export default App;
