## React Syntax for ES5 and ES6

<table>
  <tr style="background-color: #f6f8fa;">
    <th style="width: 200px;"></th>
    <th style="width: 200px;">ES5</th>
    <th style="width: 200px;">ES6</th>
  </tr>
  <tr style="background-color: #f6f8fa;">
    <td>require vs import</td>
    <td>
<pre lang="javascript">
var React = require('react');
</pre>
    </td>
    <td>
<pre lang="javascript">
import React from 'react';
</pre>
    </td>
  </tr>
  <tr style="background-color: #f6f8fa;">
    <td>export vs exports</td>
    <td>
<pre lang="javascript">
module.exports = Component;
</pre>
    </td>
    <td>
<pre lang="javascript">
export default Component;
</pre>
    </td>
  </tr>
  <tr style="background-color: #f6f8fa;">
    <td>component and function</td>
    <td>
<pre lang="javascript">
var MyComponent = React.createClass({
  render: function() {
      return <h3>Hello Edureka!</h3>;
  }
});
</pre>
    </td>
    <td>
<pre lang="javascript">
class MyComponent extends React.Component {
    render() {
        return <h3>Hello Edureka!</h3>;
    }
}
</pre>
    </td>
  </tr>
  <tr style="background-color: #f6f8fa;">
    <td>props</td>
    <td>
<pre lang="javascript">
var App = React.createClass({
  propTypes: { name: React.PropTypes.string },
  render: function() {
      return <h3>Hello, {this.props.name}!</h3>;
  }
});
</pre>
    </td>
    <td>
<pre lang="javascript">
class App extends React.Component {
    render() {
        return <h3>Hello, {this.props.name}!</h3>;
    }
}
</pre>
    </td>
  </tr>
  <tr style="background-color: #f6f8fa;">
    <td>state</td>
    <td>
<pre lang="javascript">
var App = React.createClass({
    getInitialState: function() {
        return { name: 'world' };
    },
    render: function() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
});
</pre>
    </td>
    <td>
<pre lang="javascript">
class App extends React.Component {
    constructor() {
        super();
        this.state = { name: 'world' };
    }
    render() {
        return <h3>Hello, {this.state.name}!</h3>;
    }
}
</pre>
    </td>
  </tr>
  <tr>
    <td>Props, State and Events</td>
    <td>
<pre lang="javascript">
var Comments = React.createClass({

    displayName: 'Comments',

    getInitialState: function(){
        return {comments: []}
    },

    getDefaultProps: function(){
        return {some_object: {a:1, b:2, c:3}}
    },

    handleClick: function(){
        alert('hello world!')
    },

    render: function(){
        return <div>
            There are {this.state.comments.length} comments
            <button onClick={this.handleClick}>click me!</button>
        </div>
    }
});
</pre>
    </td>
    <td>
<pre lang="javascript">
class Comments extends React.Component {
    constructor(...args){
        super(...args);
        this.state = {comments: [], toggledOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({ toggledOn: !prevState.toggledOn });
    }

    render(){
        return <div>
            There are {this.state.comments.length} comments
            <button onClick={this.handleClick}> { this.state.toggledOn ? 'ON' : 'OFF' } </button>
        </div>
    }
}
Comments.defaultProps = {a:1, b:2, c:3}
Comments.displayName = 'Comments'
</pre>    
    </td>
</table>
