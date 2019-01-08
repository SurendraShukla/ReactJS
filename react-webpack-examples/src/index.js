import React from 'react';
import ReactDOM from 'react-dom';

import Timer from '../../react-scripts-examples/src/timer/timer';
import TodoApp from '../../react-scripts-examples/src/to-do/smart/to-do-app';
import LazyLoad from '../../react-scripts-examples/src/higher-order-components/lazy-load';
import PizzaList from "../../react-scripts-examples/src/pizza-service-data-display/components/smart/pizza-list";
import FilterableProductTable from '../../react-scripts-examples/src/product-data-table/components/smart/filterable-product-table';


ReactDOM.render((
    <div className="container">
        <div className="row">
            <span className="col-xs-3" id="product-data-table">
                <FilterableProductTable />
                </span>
            <span className="col-xs-3" id="pizza-service-data-display">
                <PizzaList />
                </span>
            <span className="col-xs-2" id="to-do">
                <TodoApp />
            </span>
            <span className="col-xs-2" id="timer">
                <Timer />
                </span>
        </div>
        <div className="row">&nbsp;</div>
        <div className="row">
            <span className="col-xs-3" id="hoc-lazy-load">
                <LazyLoad>
                    <img src="https://media.giphy.com/media/HhvUpQhBWMtwc/200.gif"/>
                    <img src="https://media2.giphy.com/media/3oEduUDvycvu3GYkdG/200w.gif"/>
                    <img src="https://media0.giphy.com/media/142UITjG5GjIRi/200w.gif" />
                </LazyLoad>
            </span>
        </div>
    </div>
), document.getElementById('content'));
