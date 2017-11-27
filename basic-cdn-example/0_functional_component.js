
const Button = (props) => {
	return (
  	<button>{props.buttonName}</button>
  );
};
const StatelessCmp = props => {
  return (
    <div className="my-stateless-component">
      {props.name}: {props.birthday}
    </div>
  );
};

const FunctionalCmp = props => {
  return (
    <div>
      <StatelessCmp name="Art" birthday="10/01/1980"></StatelessCmp>
			<Button buttonName="WOW"></Button>
    </div>
  );
};

ReactDOM.render(
	<FunctionalCmp></FunctionalCmp>,
	document.getElementById("react-div")
);
