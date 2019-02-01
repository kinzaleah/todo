import React, { Fragment } from "react";
import SingleTodo from "./SingleTodo";

class TodoList extends React.Component {
  componentDidUpdate(prevProps) {
    if (prevProps.todos !== this.props.todos) {
      const key = "savedTodos";
      const savedTodos = [...this.props.todos];

      localStorage.setItem(key, JSON.stringify(savedTodos));

      this.setState(() => ({
        todos: savedTodos
      }));
    }
  }

  render() {
    return (
      <Fragment>
        <h1>Current Todos</h1>
        <ul>
          {this.props.todos.map((todo, key) => {
            if (!todo.isCompleted) {
              return (
                <SingleTodo
                  key={todo.timestamp}
                  todo={todo}
                  toggleTodoCompleted={this.props.toggleTodoCompleted}
                  removeTodo={this.props.removeTodo}
                />
              );
            }
          })}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
