import React from "react";
import { Routes, Route } from 'react-router-dom';

import Homepage from "../Homepage";
import CompanyList from "../companies/CompanyList";
import CompanyDetail from "../companies/CompanyDetail";
import JobsList from "../jobs/JobsList";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";
import EditProfileForm from "../forms/EditProfileForm";

function RouteManager() {

    return (
        <Routes>
            <Route exact path="/" element={<Homepage/>}/>
            <Route exact path="/companies" element={<CompanyList/>}/>
            <Route exact path="/companies/:handle" element={<CompanyDetail/>}/>
            <Route exact path="/jobs" element={<JobsList/>}/>
            <Route exact path="/login" element={<LoginForm/>}/>
            <Route exact path="/signup" element={<SignupForm/>}/>
            <Route exact path="/profile" element={<EditProfileForm/>}/>
        </Routes>
    )
}

export default RouteManager;