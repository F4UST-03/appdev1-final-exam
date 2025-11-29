
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Login () {
    const navigate = useNavigate();
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])

    const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/users?_limit=3")
        .then(res => setUsers(res.data))
        .catch(err => console.error(err));
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
        <div>
            <h2>Login</h2>

            <input type="text" placeholder="Enter username (E.g., Bret)" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
