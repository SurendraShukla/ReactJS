import React, {Component} from 'react';
// import fetch from 'isomorphic-fetch';

import PizzaListFilter from "./pizza-list-filter";

export default class PizzaList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            pizzaList: []
        };
    }

    componentWillMount() {
        console.log('componentWillMount pizzalist');
    }

    componentDidMount() {
        console.log('componentDidMount pizzalist');
        fetch('./api/pizza.json')
            .then(res => res.json() )
            .then(
            (result) => {
                // var sortedList = json['pizzas'].sort();
                // return this.setState(() => ({ pizzaList: sortedList, initialList: sortedList }));
                this.setState({
                    isLoaded: true,
                    pizzaList: result
                });

            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            },
            (error) => {
                this.setState({
                    isLoaded: false,
                    error
                });
            })
    }

    render() {
        const { error, isLoaded, pizzaList } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return <PizzaListFilter pizzaList={pizzaList} />
        }
    }
}
