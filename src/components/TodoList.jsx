import { todos } from "../variables";

function TodoItem({ name, completed }) {
  return <li className={`${completed ? "line-through" : ""}`}>{name}</li>;
}

function TodoList() {
  const incompleteTodos = todos.filter((todo) => {
    return !todo.completed;
  });

  return (
    <div>
      <h2>Todo List</h2>
      <ul>
        {incompleteTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              name={todo.name}
              completed={todo.completed}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
