import React from 'react';
/*import { Search, Grid, Header, Segment } from 'semantic-ui-react'*/

const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Youtube Video</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Youtube posts"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;
