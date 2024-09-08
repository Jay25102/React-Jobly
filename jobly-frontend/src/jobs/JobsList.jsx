import React, { useState, useEffect } from "react";
import SearchForm from "../forms/SearchForm";
import JoblyApi from "../../api";
import JobCardList from "./JobCardList";

function JobsList() {
    const [jobs, setJobs] = useState(null);
    console.debug("JobList");

    useEffect(function fetchAllJobsOnMount() {
        console.debug("JobList useEffect fetchAllJobsOnMount");
        search();
    }, []);
    
    async function search(title) {
        let jobs = await JoblyApi.getJobs(title);
        setJobs(jobs);
    }

    if (!jobs) return <div>loading...</div>

    return (
        <div>
            <SearchForm searchFor={search}/>
            {jobs.length 
                ? <JobCardList jobs={jobs}/>
                : <p>Sorry, no results were found!</p>
            }
        </div>
    )
}

export default JobsList;