import React, { useState } from "react";

/**
 * Search component used in CompanyList and JobList components.
 * When submitted, the component calls the searchFor prop which
 * is a function defined by the components that render it.
 */
function SearchForm({searchFor}) {
    const [searchTerm, setSearchterm] = useState("");
    console.debug("SearchForm", "searchFor=", typeof searchFor);

    function handleSubmit(e) {
        e.preventDefault();
        searchFor(searchTerm.trim() || undefined);
        setSearchterm(searchTerm.trim());
    }

    function handleChange(e) {
        setSearchterm(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    name="searchTerm"
                    placeholder="Enter term..."
                    value={searchTerm}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SearchForm;