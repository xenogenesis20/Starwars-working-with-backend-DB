import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Details } from "../views/Details";

export function Card(props) {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.cardImg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.person.name}</h5>
				<p className="card-text">
					{props.label1}
					{props.person.height}
				</p>
				<p className="card-text">
					{props.label2}
					{props.person.gender}
				</p>
				<p className="card-text">
					{props.label3}
					{props.person.eye_color}
				</p>
				<Link
					to={{
						pathname: "/Details/" + props.ID,
						state: {
							props
						}
					}}>
					<button className="btn btn-primary">Details</button>
				</Link>
				<button href="#" className="btn btn-primary">
					<i className="far fa-heart" />
				</button>
			</div>
		</div>
	);
}

Card.propTypes = {
	person: PropTypes.object,
	name: PropTypes.string,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	cardImg: PropTypes.string,
	ID: PropTypes.number
};
