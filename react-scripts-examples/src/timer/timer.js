import React, { Component } from 'react';

export default class Timer extends React.Component {
  
  /* Perfect for setting up our Component 
      Create any fields (variables starting with this.) or 
        Initialize state based on props received.
  */
  constructor(props) {
    console.log('constructor');
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentWillMount() {
    console.log('componentWillMount');
    clearInterval(this.interval);
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    this.interval = setInterval(() => this.tick(), 1000);
  }


  shouldComponentUpdate() {
    // console.log("\nshouldComponentUpdate");
    return true;
  }

  componentWillReceiveProps() {
    // console.log('componentWillReceiveProps');
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate');
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }


  render() {
    return (
      <div>
        Seconds: {this.state.seconds}
      </div>
    );
  }
}
