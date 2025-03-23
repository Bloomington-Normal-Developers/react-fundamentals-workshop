import React from "react";

function TodoItem({ name, completed }) {
  if (completed) {
    return <li className="line-through">{name}</li>;
  }

  return <li>{name}</li>;
}

function TodoList() {
  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        <TodoItem name="Work out" completed={true} />
        <TodoItem name="Read Clean Code" completed={false} />
        <TodoItem name="Learn React" completed={true} />
      </ul>
    </div>
  );
}

export default TodoList;
