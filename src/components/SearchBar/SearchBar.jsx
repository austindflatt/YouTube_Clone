import React, { Component } from 'react';
import { Input, Form, Button } from 'semantic-ui-react'

class SearchBar extends React.Component {
    state = {
        searchTerm: ''
    };
    handleChange = (event) => this.setState({ searchTerm: event.target.value });
    handleSubmit = (event) => {
        const { searchTerm } = this.state;
        const { onFormSubmit } = this.props;
        onFormSubmit(searchTerm);
        event.preventDefault();
    };
    render() {
        return (
                <Form onSubmit={this.handleSubmit}>
                    <Input placeholder="Search Youtube Videos" onChange={this.handleChange} />
                    <Button type="submit">Search</Button>
                </Form>
        );
    }
}

export default SearchBar;
