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
          onClick={this.handleClick}
          style={
            this.props.todo.isCompleted
              ? { backgroundColor: "#30ffce", textDecoration: "line-through" }
              : null
          }
        >
          {this.props.todo.text}
        </li>
        <button onClick={this.handleButtonClick}>x</button>
      </Fragment>
    );
  }
}

export default SingleTodo;
