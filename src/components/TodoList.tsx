import React from "react";
import { todos } from "../variables";

function TodoItem({ name, completed }) {
  return <li className={`${completed ? "line-through" : ""}`}>{name}</li>;
}

function TodoList() {
  const completedTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {completedTodos.map((todo) => (
          <TodoItem key={todo.id} name={todo.name} completed={todo.completed} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
