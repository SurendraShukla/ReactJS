import React, { Component } from 'react';
import ReactDOM from 'react-dom';

var onKeypress = {
    componentDidMount(){
        this.onpress && window.addEventListener('keyup', this.onpress)
    },
    componentWillUnmount(){
        this.onpress && window.removeEventListener('keyup', this.onpress)
    }
}

var Loadable = {
    componentDidMount(){
        if(this.load){
            this.setState({loaded: false})
            Promise.all([].concat(this.load))
                .then(() =>
                    this.setState({loaded: true}))
        }
    }
}

var Loggable = {
    log(...args) {
        alert(args)
    }
}

var Example = React.createClass({
    mixins: [Loggable, Loadable, onKeypress],
    componentWillMount(){
        this.onpress = (e) => this.log(e.which, 'pressed!')
        this.load = [new Promise((res,rej) => setTimeout(res, 3000))]
        this.log = (...args) => console.log(...args)
    },
    getInitialState(){
        return {}
    },
    render() {
        if(!this.state.loaded)
            return <div>loading...</div>
        return <div>test</div>
    }
})


ReactDOM.render(
  <Example />,
  document.getElementById('root')
);
