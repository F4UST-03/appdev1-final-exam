import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"
import { useNavigate } from "react-router-dom";


function Todos () {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    return (
        <div>
            <h1>Todos</h1>
            <AddTodoForm />
            <TodoList todos={todos} />

            <button onClick={() => navigate("/home")}>Back to Home</button>
            <button onClick={() => navigate("/login")}>Logout</button>
        </div>
    )
}

export default Todos