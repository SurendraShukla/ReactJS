import fetch from 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';

import FilterableProductTable from './product-data-table/components/filterable-product-table';
import { PRODUCTS } from './product-data-table/products';

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('product-data-table')
);

import PizzaListFilter from './pizza-service-data-display/components/pizza-list-filter';
fetch('/pizza.json')
.then(function (response) {
  return response.json();
}).then((json) => {
  ReactDOM.render(
    <PizzaListFilter pizzaList={json} />,
    document.getElementById('pizza-service-data-display')
  )
  // var sortedList = json['pizzas'].sort();
  // return this.setState(() => ({ pizzaList: sortedList, initialList: sortedList }));
}).catch(function (ex) {
  console.log('parsing failed', ex);
  ReactDOM.render(
    <PizzaListFilter />,
    document.getElementById('pizza-service-data-display')
  )
});

import TodoApp from './to-do/to-do-app';
ReactDOM.render(<TodoApp />, document.getElementById('to-do'));

import LazyLoad from './higher-order-components/lazy-load';
ReactDOM.render(<LazyLoad>
        <img src="https://media.giphy.com/media/HhvUpQhBWMtwc/200.gif"/>
        <img src="https://media2.giphy.com/media/3oEduUDvycvu3GYkdG/200w.gif"/>
        <img src="https://media0.giphy.com/media/142UITjG5GjIRi/200w.gif" />
    </LazyLoad>, document.getElementById('hoc-lazy-load'));
