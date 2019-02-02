import React, { Fragment } from "react";

class SingleTodo extends React.Component {
  handleClick = event => {
    this.props.toggleTodoCompleted(event, this.props.todo);
  };

  handleButtonClick = event => {
    this.props.removeTodo(event, this.props.todo);
  };

  render() {
    return (
      <Fragment>
        <li
          className="todo-item"
          onClick={this.handleClick}
          style={
            this.props.todo.isCompleted
              ? { backgroundColor: "#61c693", textDecoration: "line-through" }
              : null
          }
        >
          {this.props.todo.text}
        </li>
      </Fragment>
    );
  }
}

export default SingleTodo;
