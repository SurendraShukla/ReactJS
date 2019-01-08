import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class List extends Component {
    constructor(p){
        super(p)
    }

    _printValue(){
        console.log(this.refs.someThing.value)
    }

    render() {
        return <div onClick={e => this._printValue()}>
            <p>test</p>
            <input type="text" ref="someThing" />
        </div>
    }
}

ReactDOM.render(<List />, document.getElementById('root'));
