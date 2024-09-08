import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./forms/UserContext";

function Homepage() {
    const { currentUser } = useContext(UserContext);
    console.debug("Homepage", "currentUser=", currentUser);
    
    return (
        <div>
            <div>Jobly</div>
            <div>All the jobs in one, convenient place.</div>
            {currentUser
                ? <h2>Welcome Back, {currentUser.firstName || currentUser.username}!</h2>
                : (
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Sign Up</Link>
                    </div>
                )}
        </div>
    )
}

export default Homepage;