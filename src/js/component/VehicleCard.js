import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Details } from "../views/Details";

export function VehicleCard(props) {
	return (
		<div className="card col m-1" style={{ width: "250px" }}>
			<img src={props.cardImg} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title"> {props.vehicles.name}</h5>
				<p className="card-text">
					{props.label1}
					{props.vehicles.model}
				</p>
				<p className="card-text">
					{props.label2}
					{props.vehicles.cost_in_credits}
				</p>
				<p className="card-text">
					{props.label3}
					{props.vehicles.crew}
				</p>
				<Link
					to={{
						pathname: "/VehicleDetails/" + props.ID,
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

VehicleCard.propTypes = {
	vehicles: PropTypes.object,
	name: PropTypes.string,
	label1: PropTypes.string,
	label2: PropTypes.string,
	label3: PropTypes.string,
	cardImg: PropTypes.string,
	ID: PropTypes.number
};