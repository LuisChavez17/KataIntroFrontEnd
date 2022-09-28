import React, { useState } from "react";

const LoginForm = () => {
    const credentialsHarcoded = { user: "usuarioG17", password: "password" };

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

    const handleFormValue = ({ target: { name, value } }) =>
        setCredentials({ ...credentials, [name]: value });

    const submitForm = () => {
        const { user, password } = credentialsHarcoded;
        if (credentials.user === user && credentials.password === password) {
            console.log("credentials EXITOSAS ✅");
        }
    };

    return (
        <div>
            LoginForm Component
            <div>
                <input type="text" name="user" value={credentials.user} onChange={handleFormValue} />
                <input type="password" name="password" value={credentials.password} onChange={handleFormValue} />
                <button onClick={() => submitForm()}>Login</button>
            </div>
        </div>
    );
};


export default LoginForm