import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    return (
        <input
          type="text"
          placeholder="Filter..."
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
    );
  }
}
