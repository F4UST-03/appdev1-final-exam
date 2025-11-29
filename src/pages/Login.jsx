
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [theme, setTheme] = useState("standard")

    const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users?_limit=3")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));

        const bodyCls = document.body.classList
        if (bodyCls.contains("light")) setTheme("light")
        else if (bodyCls.contains("darker")) setTheme("darker")
        else setTheme("standard")
    }, [])

    function handleLogin() {
        const foundUser = users.find(user => user.username === username)

        if (!foundUser) {
            alert("Username not found!")
            return;
        }

        if (password !== SECRET) {
            alert("Incorrect password!")
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        navigate("/todos")
    }

    return (
        <div className="page-container">
            <div className="auth-card">
                <h2 className="login-title">Login</h2>

                <div className="login-form">
                    <input
                        type="text"
                        className={`login-input ${theme}-input`}
                        placeholder="Enter username (E.g., Bret)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

                    <input
                        type="password"
                        className={`login-input ${theme}-input`}
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button className={`standard-button ${theme}-button`} onClick={handleLogin}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default Login
