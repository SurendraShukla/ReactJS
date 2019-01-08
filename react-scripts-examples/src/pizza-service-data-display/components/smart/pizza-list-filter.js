import React, { Component } from 'react';
import { LoadingMessage } from '../presentational/loading-message';
import SearchBar from './search-bar';
import SortBar from './sort-bar';
import { List } from '../presentational/list';

export default class PizzaListFilter extends Component {

  constructor(props) {

    super(props);
    var list = (props.pizzaList) ? props.pizzaList['pizzas'].sort() : props.pizzaList;
    this.state = {
      pizzaList: list,
      initialList: list,
      filterText: '',
      sorted: 'ASC',
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.toggleSort = this.toggleSort.bind(this);

  }

  toggleSort(sortText) {
    if(sortText === 'ASC') {
      return this.setState({
        sorted: 'DESC',
        pizzaList: this.state.pizzaList.reverse()
        },
        () => console.log('setState takes 2nd argument as callback')
      );
    }
    return this.setState({
      sorted: 'ASC',
      pizzaList: this.state.pizzaList.sort()
      },
      () => console.log('setState takes 2nd argument as callback')
    );
  }

  handleFilterTextChange(filterText) {
    if(!filterText) {
      return this.setState({
        filterText: filterText,
        sorted: this.state.sorted,
        pizzaList: this.state.initialList
        },
        () => console.log('setState takes 2nd argument as callback')
      );
    }

    var updatedPizzaList = this.state.pizzaList;
    updatedPizzaList = updatedPizzaList.filter(function(item){
      return item.toLowerCase().search(
        filterText.toLowerCase()) !== -1;
    });

    this.setState({
      filterText: filterText,
      sorted: this.state.sorted,
      pizzaList: updatedPizzaList
      },
      () => console.log('setState takes 2nd argument as callback')
    );

  }

  render() {
    const { pizzaList } = this.state;
    if(!pizzaList) return <LoadingMessage />;

    return (
      <div>
        <h1> Pizza List </h1>
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <SortBar
          sorted={this.state.sorted}
          onSortChange={this.toggleSort}
        />
        <List items={pizzaList} />
      </div>
    );
  }
}
