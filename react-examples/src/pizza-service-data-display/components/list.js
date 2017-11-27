import React, { Component } from 'react';

export const List = (props) => (
  <ul>{props.items.map(function(item) { return <li key={item}>{item}</li>})}</ul>
);
