import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const buttonStyles = {
	//write button styles here
	background: "yellow",
	//	fontSize: "16 px",
	color: "black",
	border: "none"
};

const badgeStyles = {
	//write the span styles here
	background: "red",
	color: "white"
	//borderRadious: "50px",
	//margin: "2px"
};

const Badge = props => {
	return (
		<button style={buttonStyles} type="button" className="btn btn-primary">
			{props.label}
			<span style={badgeStyles} className="badge badge-light">
				{props.number}
			</span>
		</button>
	);
};
Badge.propTypes = {
	label: PropTypes.string,
	number: PropTypes.string
};
//dont forget to change the label
ReactDOM.render(<Badge label="Alerts" number="2" />, document.querySelector("#myDiv"));
