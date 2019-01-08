import React from 'react';
import FilterableProductTable from "../../product-data-table/components/smart/filterable-product-table";
import PizzaList from "../../pizza-service-data-display/components/smart/pizza-list";
import TodoApp from "../../to-do/smart/to-do-app";
import Timer from "../../timer/timer";
import LazyLoad from "../../higher-order-components/lazy-load";

const HomePage = () => (
<div className="container">
    <div className="row">
        <span className="col-xs-3" id="product-data-table"><FilterableProductTable /></span>
        <span className="col-xs-3" id="pizza-service-data-display"><PizzaList /></span>
        <span className="col-xs-3" id="to-do"><TodoApp /></span>
        <span className="col-xs-3" id="hoc-lazy-load">
            <Timer />
            {/*<LazyLoad>*/}
                {/*<img src="https://media.giphy.com/media/HhvUpQhBWMtwc/200.gif"/>*/}
                {/*<img src="https://media2.giphy.com/media/3oEduUDvycvu3GYkdG/200w.gif"/>*/}
                {/*<img src="https://media0.giphy.com/media/142UITjG5GjIRi/200w.gif" />*/}
            {/*</LazyLoad>*/}
        </span>
    </div>
</div>
);

export default HomePage;
