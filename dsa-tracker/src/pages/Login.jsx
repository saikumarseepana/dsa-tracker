import React, { useState } from 'react'

function Login() {
    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("User logged in with : ", username, password);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                type = "text"
                placeholder = "username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)}
                />
                <input 
                type = "text"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <button type = "Submit">Login</button>
            </form>
        </div>
    );
}

export default Login;