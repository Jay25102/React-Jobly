import React, { useState } from "react";

function JobCard({id, title, salary, equity, companyName}) {

    return (
        <div>
            {companyName}
            {title}
            {salary}
            {equity}
        </div>
    )
}

export default JobCard;