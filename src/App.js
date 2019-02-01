import React, { Component } from "react";
import "./App.css";

import TodoList from "./components/TodoList";
import CompletedTodoList from "./components/CompletedTodoList";
import AddTodo from "./components/AddTodo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      todos: JSON.parse(localStorage.getItem("savedTodos")) || []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleTodoCompleted = this.toggleTodoCompleted.bind(this);
    this.removeSavedTodos = this.removeSavedTodos.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  removeSavedTodos() {
    localStorage.removeItem("savedTodos");

    this.setState({
      todos: []
    });
  }

  handleSubmit(event) {
    // stop the page refreshing upon submit
    event.preventDefault();

    // grab your input from the form (remember the elements bit here)
    const inputTodo = {
      isCompleted: false,
      timestamp: new Date(),
      text: event.target.elements["todo"].value
    };

    // spread my existing array into a new array and add the input one
    const newTodos = [...this.state.todos, inputTodo];

    // set my state with the new array!
    this.setState({
      todos: newTodos
    });

    // reset the form
    document.getElementById("addTodoForm").reset();
  }

  // if a user clicks on a todo then it should toggle the isCompleted value
  toggleTodoCompleted(event, todo) {
    const timestamp = todo.timestamp;
    const todos = [...this.state.todos];
    const selectedTodoIndex = todos.findIndex(
      todo => todo.timestamp === timestamp
    );

    todos.splice(selectedTodoIndex, 1, {
      ...todo,
      isCompleted: !todo.isCompleted
    });

    this.setState({
      todos: todos
    });
  }

  removeTodo(event, todo) {
    const timestamp = todo.timestamp;
    const todos = [...this.state.todos];
    const selectedTodoIndex = todos.findIndex(
      todo => todo.timestamp === timestamp
    );

    todos.splice(selectedTodoIndex, 1);
    this.setState({
      todos: todos
    });
  }

  render() {
    return (
      <div className="App">
        <AddTodo handleSubmit={this.handleSubmit} />
        <TodoList
          todos={this.state.todos}
          toggleTodoCompleted={this.toggleTodoCompleted}
          removeTodo={this.removeTodo}
        />
        <CompletedTodoList
          todos={this.state.todos}
          toggleTodoCompleted={this.toggleTodoCompleted}
          removeTodo={this.removeTodo}
        />

        {this.state.todos.length >= 1 ? (
          <button onClick={this.removeSavedTodos}>
            Clear your saved Todos!
          </button>
        ) : null}
      </div>
    );
  }
}

export default App;
