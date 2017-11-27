class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    // set the default internal state
    this.state = {
      clicks: 0
    };
  }

  componentDidMount() {
    // console.log('inside componentDidMount');
    // this.refs.myComponentDiv.addEventListener('click', this.clickHandler);
  }

  componentWillUnmount() {
    // console.log('inside componentWillUnmount');
    // this.refs.myComponentDiv.removeEventListener('click', this.clickHandler);
  }

  clickHandler() {
    console.log('this.state.clicks');
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {
    let children = this.props.children;

    return (
      <div className="my-component" ref="myComponentDiv" onClick={() => this.clickHandler()}>
        <h2>My Component ({this.state.clicks} clicks})</h2>
        <h3>{this.props.headerText}</h3>
        {children}
      </div>
    );
  }
}

ReactDOM.render(
	<MyComponent name="Google" url="https://google.com" />,
	document.getElementById("react-div")
);
