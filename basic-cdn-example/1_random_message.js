
var Greeting = React.createClass({
  render: function() {
    return (
      <p>{this.props.message}</p>
    );
  }
});

setInterval(function() {
  var messages = ['Hello, World', 'Hello, Planet', 'Hello, Universe'];
  var randomMessage = messages[Math.floor((Math.random() * 3))];

  ReactDOM.render(
    <Greeting message={randomMessage}/>,
    document.getElementById("react-div")
		// document.body
  );
}, 2000);
