import React, { useState, useContext, useEffect } from "react";
import UserContext from "../forms/UserContext";

/**
 * Display info about each job. Rendered from JobCardList.
 */
function JobCard({id, title, salary, equity, companyName}) {
    const { hasAppliedToJob, applyToJob } = useContext(UserContext);
    const [applied, setApplied] = useState();
    console.debug("JobCard");

    useEffect(function updateAppliedStatus() {
        console.debug("JobCard useEffect updateAppliedStatus", "id=", id);
        setApplied(hasAppliedToJob(id));
    }, [id, hasAppliedToJob]);

    // apply for a job if not already applied
    async function handleApply(e) {
        if (hasAppliedToJob(id)) return;
        applyToJob(id);
        setApplied(true);
    }

    // make displaying salary look nicer in text
    function formatSalary(salary) {
        const digitsRev = [];
        const salaryStr = salary.toString();

        for (let i = salaryStr.length - 1; i >= 0; i--) {
            digitsRev.push(salaryStr[i]);
            if(i > 0 && i % 3 === 0) digitsRev.push(",");
        }

        return digitsRev.reverse().join("");
    }

    return (
        <div>
            <div>Applied: {applied}</div>
            <div>Title: {title}</div>
            <div>Company: {companyName}</div>
            {salary && <div>Salary: {formatSalary(salary)}</div>}
            {equity !== undefined && <div>Equity: {equity}</div>}
            <button
                onClick={handleApply}
                disabled={applied}
            >{applied ? "Applied" : "Apply"}</button>
        </div>
    )
}

export default JobCard;