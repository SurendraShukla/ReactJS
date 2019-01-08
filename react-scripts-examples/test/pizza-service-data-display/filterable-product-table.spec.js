import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';

import TestUtils from 'react-dom/test-utils';
import { shallow, mount } from 'enzyme';
import { expect } from 'code';

import PizzaListFilter from '../../../react-scripts-examples/src/pizza-service-data-display/components/smart/pizza-list-filter';

let pizzaList = {
  "pizzas": [
    "Sausage",
    "Cheese",
    "Pepperoni",
    "Hawaiian",
    "vegetable",
    "3 cheeSe",
    "macaroni",
    "Chicken",
    "Sausage and Pepperoni"
  ]
};

describe('PizzaListFilter View', () => {

  beforeEach(() => {
  });

  it('should display list, sort button and input for PizzaListFilter if pizza list is there', () => {
    const app = mount(<PizzaListFilter pizzaList={pizzaList} />);
    expect(app.find('input')).to.exist();
    expect(app.find('button')).to.exist();
    expect(app.find('li').length).to.equal(pizzaList['pizzas'].length);
  });

  it('should display loading only when page waits for data to load', () => {
    const app = mount(<PizzaListFilter />);
    expect(app.text().toLowerCase()).contains('loading');
  });

  it('should PizzaListFilter pizza list as per PizzaListFilter text and filteration should be case insensitive', () => {
    const app = mount(<PizzaListFilter pizzaList={pizzaList} />);
    let expectedOutput = [ '3 cheeSe', 'Cheese', 'Chicken' ];

    let addInput = app.find('input').get(0);
    addInput.value = 'Ch';
    app.find('input').simulate('change');
    expect(getLiItems(app)).to.equal(expectedOutput);

    addInput.value = 'ch';
    app.find('input').simulate('change');
    expect(getLiItems(app)).to.equal(expectedOutput);

  });

  it('should sort list descending or ascending if sort button is clicked', () => {

    const app = mount(<PizzaListFilter pizzaList={pizzaList} />);
    let listSortedAsc = pizzaList['pizzas'].sort();
    let listSortedDesc = listSortedAsc.reverse();

    app.find('button').at(0).simulate('click');
    expect(getLiItems(app)).to.equal(listSortedDesc);

    app.find('button').at(0).simulate('click');
    expect(getLiItems(app)).to.equal(listSortedDesc);
  });

  it('should sort for filtered list', () => {

    let filteredList = [ 'Sausage', 'Sausage and Pepperoni' ];

    const app = mount(<PizzaListFilter pizzaList={pizzaList} />);

    let addInput = app.find('input').get(0);
    addInput.value = 'Sau';
    app.find('input').simulate('change');

    app.find('button').at(0).simulate('click');
    expect(getLiItems(app)).to.equal(filteredList.reverse());

    app.find('button').at(0).simulate('click');
    expect(getLiItems(app)).to.equal(filteredList.sort());
  });

});


function getLiItems(app) {
  let list = [];
  app.find('li').forEach((i) => {
    list.push(i.text());
  });
  return list;
}
