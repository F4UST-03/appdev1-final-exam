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
        <div className="page-container">
            <div className="auth-card">
                <h1 style={{ marginBottom: '12px' }}>Todos</h1>
                <AddTodoForm />
                <TodoList todos={todos} />

                <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 12 }}>
                    <button className="standard-button" onClick={() => navigate("/home")}>Back to Home</button>
                    <button className="standard-button" onClick={() => navigate("/login")}>Logout</button>
                </div>
            </div>
        </div>
    )
}

export default Todos