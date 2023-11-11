import React, { useState } from "react";

const Login = () => {
    const [name, setName] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };
    const handleLogout = () => {
        setName("");
        setLoggedIn(false);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div>
            {loggedIn ? (
                <div>
                    <h1>Hola {name}!!</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Ingrese su nombre:</h1>
                    <input type="text" value={name} onChange={handleNameChange} />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default Login;