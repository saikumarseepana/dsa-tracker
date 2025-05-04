import React, { useState } from 'react'

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        console.log("Admin logged in with : ", username, password);
    };

    return (
        <div>
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <input 
                type = "text"
                placeholder = "Username"
                value = {username}
                onChange = {(e) => setUsername(e.target.value)} 
                />
                <input 
                type = "text"
                placeholder = "Password"
                value = {password}
                onChange = {(e) => setPassword(e.target.value)}
                />
                <button type = "submit">Login</button>
            </form>
        </div>
    );
}

export default AdminLogin;