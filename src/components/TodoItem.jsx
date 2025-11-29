import { useDispatch } from "react-redux"
import { updateTodo, deleteTodo, toggleLocal } from "../features/todos/todosSlice"
import { useEffect, useState } from "react"

function TodoItem ({ todo }) {
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("standard")

  useEffect(() => {
    const bodyCls = document.body.classList
    if (bodyCls.contains("light")) setTheme("light")
    else if (bodyCls.contains("darker")) setTheme("darker")
    else setTheme("standard")
  }, [])

  const toggleComplete = () => {
    dispatch(toggleLocal(todo.id))
    dispatch(updateTodo({ ...todo, completed: !todo.completed }))
  }

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  }

  return (
    <li className={`todo ${theme}-todo`}>
      <input className="check-btn" type="checkbox" checked={todo.completed} onChange={toggleComplete} />
      <span className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        {todo.title}
      </span>
      <button className={`delete-btn ${theme}-button`} onClick={handleDelete}>Delete</button>
    </li>
  )
}

export default TodoItem