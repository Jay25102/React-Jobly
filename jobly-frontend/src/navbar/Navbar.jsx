import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <div>
            <NavLink to="/">Homepage</NavLink>
            <NavLink to="/companies">Companies</NavLink>
            <NavLink to="/jobs">Jobs</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/signup">Signup</NavLink>
        </div>
    )
}

export default Navbar;