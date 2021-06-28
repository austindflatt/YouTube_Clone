import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react'

const SearchBar = () => (
    <Form action="/" method="get">
        <input
            type="text"
            id="header-search"
            placeholder="Search Youtube Videos"
            name="s" 
        />
        <Button type="submit">Search</Button>
    </Form>
);

export default SearchBar;
