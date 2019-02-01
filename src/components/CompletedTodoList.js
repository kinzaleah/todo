import React, { Fragment } from "react";
import SingleTodo from "./SingleTodo";

class CompletedTodoList extends React.Component {
  render() {
    return (
      <Fragment>
        <h1>Completed Todos</h1>
        <ul>
          {this.props.todos.map(todo => {
            if (todo.isCompleted) {
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

export default CompletedTodoList;
