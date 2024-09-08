import React from "react";
import { Link } from "react-router-dom";

/**
 * Displays info about companies
 * 
 * Rendered by CompanyList
 */
function CompanyCard({name, handle, description, logoUrl}) {
    console.debug("CompanyCard", logoUrl);

    return (
        <Link to={`/companies/${handle}`}>
            <div>
                {name}
                {logoUrl && <img src={logoUrl} alt={name}/>}
                {description}
            </div>
        </Link>
    )
}

export default CompanyCard;