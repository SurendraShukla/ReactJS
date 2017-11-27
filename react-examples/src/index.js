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
