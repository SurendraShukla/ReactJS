import React, { Component } from 'react';

export default class List extends Component{
  render(){
    return (
      <ul>
      {
        this.props.items.map(function(item) {
          return <li key={item}>{item}</li>
        })
      }
      </ul>
    )
  }
};
