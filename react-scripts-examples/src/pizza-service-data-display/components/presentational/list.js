import React, { Component } from 'react';

export const List = (props) => (
  <ul>{props.items.map(function(item) { return <div key={item}>{item}</div>})}</ul>
);
