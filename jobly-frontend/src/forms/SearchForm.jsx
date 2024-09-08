import React, { useState } from "react";

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