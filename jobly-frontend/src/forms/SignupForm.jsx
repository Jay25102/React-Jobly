import React, { useState } from "react";
import { redirect } from "react-router-dom";
import Alert from "../Alert";

/**
 * Form to register a new user.
 * 
 * When submitted, calls signup function prop defined in App
 * then redirects to /companies
 */
function SignupForm({signup}) {
    const initialState = {
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    };
    const [formData, setFormData] = useState(initialState);
    const [formErrors, setFormErrors] = useState([]);

    console.debug(
        "SignupForm",
        "signup=", typeof signup,
        "formData=", formData,
        "formErrors=", formErrors,
    )

    async function handleSubmit(e) {
        e.preventDefault();
        let result = await signup(formData);
        if (result.success) {
            return redirect("/companies");
        }
        else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({ ... data, [name]: value}));
    }

    return (
        <div>
            <div>Sign Up</div>
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
            <div>
                <label>First Name</label>
                <input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Last Name</label>
                <input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email</label>
                <input 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>

            {formErrors.length
                    ? <Alert messages={formErrors}/>
                    : null}

            <button type="submit" onSubmit={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default SignupForm;