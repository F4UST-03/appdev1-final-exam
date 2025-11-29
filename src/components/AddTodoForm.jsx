
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../features/todos/todosSlice"

function AddTodoForm () {
  const [title, setTitle] = useState("")
  const dispatch = useDispatch()
  const [theme, setTheme] = useState("standard")

  useEffect(() => {
    const bodyCls = document.body.classList
    if (bodyCls.contains("light")) setTheme("light")
    else if (bodyCls.contains("darker")) setTheme("darker")
    else setTheme("standard")
  }, [])

  const handleAdd = () => {
    if (title.trim() === "") return
    dispatch(addTodo(title))
    setTitle("")
  }

  return (
    <div className="add-todo-form">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
        className={`todo-input ${theme}-input`}
      />
      <button className={`todo-btn ${theme}-button`} onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodoForm
