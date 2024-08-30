import React from "react";
import { Link } from "react-router-dom";

function CompanyCard({name, handle, description, logoUrl}) {

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