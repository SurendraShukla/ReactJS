import React, { Component } from 'react';

export default class SortBar extends Component {
  constructor(props) {
    super(props);
    this.toggleSort = this.toggleSort.bind(this);
  }

  toggleSort(e) {
    this.props.onSortChange(e.target.value);
  }

  render() {
    return (
        <button
          type="button"
          value={this.props.sorted}
          onClick={this.toggleSort}
        >List is sorted {this.props.sorted}. Click to toggle</button>
    );
  }
}
