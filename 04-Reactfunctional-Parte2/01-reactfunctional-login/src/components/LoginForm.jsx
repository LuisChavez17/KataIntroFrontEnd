import React, { useState } from "react";

const LoginForm = () => {
    const [credentials, setCredentials] = useState({});

    /**
     * Tener dos inputs para el user y password
     * & un boton para validar credenciales,
     * Si las credenciales son correctas, dar acceso
     *
     * Harcodear 👀 credenciales con
     * user: usuarioG17
     * password: password
     *
     *
     */

    const handleFormValue = (e) => {
        console.log(e.target.value);
        // key: value
        setCredentials();
    };

    return (
        <div>
            LoginForm Component
            <div>
                <input type="text" name="user" value={credentials.user} onChange={handleFormValue}/>
                <input type="password" name="password" value={credentials.password} onChange={handleFormValue}/>
            </div>
        </div>
    );
};


export default LoginForm