## React Syntax for ES5 and ES6

<table>
  <tr>
    <th></th>
    <th>ES5</th>
    <th>ES6</th>
  </tr>
  <tr>
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
  <tr>
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
  <tr>
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
  <tr>
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
  <tr>
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
    <td></td>
    <td>
      <pre lang="javascript">
      </pre>
    </td>
    <td>
      <pre lang="javascript">
      </pre>
    </td>
  </tr>
</table>
