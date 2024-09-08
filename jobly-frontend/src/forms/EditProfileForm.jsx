import React, { useState, useContext } from "react";
import Alert from "../Alert";
import JoblyApi from "../../api";
import UserContext from "./UserContext";


/**
 * Form for editing user profile.
 * 
 * Displays a form with values autofilled to current user data.
 * Once the form submits, the API is called to patch in the new
 * user information from the form. This also reloads the site
 */
function EditProfileForm() {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    const [formData, setFormData] = useState({
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        email: currentUser.email,
        username: currentUser.username,
        password: "",
    });
    const [formErrors, setFormErrors] = useState([]);
    const [saveConfirmed, setSaveConfirmed] = useState(false);
    console.debug(
        "EditProfileForm",
        "currentuser=", currentUser,
        "formData=", formData,
        "formErrors=", formErrors,
        "saveConfirmed", saveConfirmed,
    )

    /**
     * Uses api to try to patch data to backend.
     * Reports any errors and if successful, sets new info
     * across the site.
     */
    async function handleSubmit(e) {
        e.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password,
        };
        let username = formData.username;
        let updatedUser;

        try {
            updatedUser = await JoblyApi.saveProfile(username, profileData);
        } 
        catch (errors) {
            setFormErrors(errors);
            return;
        }

        setFormData(data => ({ ...data, password: ""}));
        setFormErrors([]);
        setSaveConfirmed(true);
        // triggers user info to reload
        setCurrentUser(updatedUser);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]: value,
        }));
        setFormErrors([]);
    }

    return (
        <div>
            <div>Profile</div>
            <form>
                <div>
                    <label>First Name</label>
                    <input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Confirm password to make changes: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>

                {formErrors.length
                    ? <Alert messages={formErrors}/>
                    : null}
                {saveConfirmed
                    ? <Alert type="success" messages={["updated successfully."]}/>
                    : null}

                <button onClick={handleSubmit}>Save Changes</button>
            </form>
        </div>
    )
}

export default EditProfileForm;