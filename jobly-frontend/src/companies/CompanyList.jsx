import React, { useState, useEffect} from "react";
import JoblyApi from "../../api";
import CompanyCard from "./CompanyCard";

function CompanyList() {
    const [companies, setCompanies] = useState(null);

    useEffect(function fetchCompaniesOnMount() {
        async function fetchCompanies(name) {
            let response = await JoblyApi.getCompanies(name);
            setCompanies(response);
        }
        fetchCompanies();
    }, []);

    if (!companies) return <div>loading...</div>

    return (
        <div>
            {companies.map(c => (
                <CompanyCard 
                    key={c.handle}
                    handle={c.handle}
                    name={c.name}
                    description={c.description}
                    logoUrl={c.logoUrl}
                />
            ))}
        </div>
    )
}

export default CompanyList;