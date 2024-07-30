import React from "react";

function SearchInput({ search, setSearch, getProducts }) {



    return (
       
        <div class="input-group mb-3">
        <input 
            type="text" 
            className="form-control searchbox" 
            placeholder="Search for a product" 
            aria-label="Recipient's username" 
            aria-describedby="button-addon2"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => getProducts(search)}>Search</button>
      </div>
    )
}

export default SearchInput

