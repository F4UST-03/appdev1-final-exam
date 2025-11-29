import TodoItem from "./TodoItem";

function TodoList({ todos }) {
  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList