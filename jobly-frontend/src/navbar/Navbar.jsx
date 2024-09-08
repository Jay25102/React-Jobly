import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../forms/UserContext";

/**
 * Site-wide navbar. Shows different options when logged in/out.
 * Logs user out using the logout function defined in App
 */
function Navbar({ logout }) {
    const { currentUser } = useContext(UserContext);
    console.debug("Navigation", "currentUser=", currentUser);

    function loggedInNav() {
        return (
            <div>
                <NavLink to="/companies">Companies</NavLink>
                <NavLink to="/jobs">Jobs</NavLink>
                <NavLink to="/profile">Profile</NavLink>
                <NavLink to="/" onClick={logout}>Log out {currentUser.first_name || currentUser.username}</NavLink>
            </div>
        )
    }

    function loggedOutNav() {
        return (
            <div>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
            </div>
        )
    }

    return (
        <div>
            <NavLink to="/">Homepage</NavLink>
            {currentUser ? loggedInNav() : loggedOutNav()}
        </div>
    )
}

export default Navbar;