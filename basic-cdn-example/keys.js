import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
    constructor(p){
        super(p)
        this.state = {
            items: Array(5).fill(1).map((x,i) => ({id:i}))
        }
    }

    componentDidMount(){
        const random = (a,b) => Math.random() < .5 ? -1 : 1

        setInterval(() => {
            this.setState({
                items: this.state.items.sort(random)
            })
        }, 20)
    }

    render() {
        let {items} = this.state
        return <ul>
            {items.map(item =>
                <li key={item.id}>{item.id}</li>)}
        </ul>
    }
}

ReactDOM.render(<List />, document.getElementById('root'));
