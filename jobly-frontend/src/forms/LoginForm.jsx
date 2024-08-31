import React, { useState } from "react";
import { redirect } from "react-router-dom";

function LoginForm({ login }) {
    const initialState = {
        username: "",
        password: "",
    }
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await login(formData);
        if (result.success) {
            return redirect("/companies");
        } else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({...data, [name]: value }))
    }

    return (
        <div>
            <div>Login</div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username</label>
                    <input 
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        autoComplete="username"
                        required
                    />
                </div>
                <div>
                    <label>Password</label>
                    <input 
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        autoComplete="current-password"
                        required
                    />
                </div>
                {formErrors.map(err => (
                    <p>{err}</p>
                ))}
                <button onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm;