import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";

import "../../styles/demo.scss";

export const VehicleDetails = () => {
	const location = useLocation();
	// const { person } = location.state.props.person;
	// console.log(person);
	// console.log(location.state.props.planet.name);
	// console.log(location.state.props);

	return (
		<div className="container ">
			<h1>{location.state.props.vehicles.name}</h1>
			<div>
				<img
					className="detailImg"
					src="https://3.bp.blogspot.com/-ujAKm5JrOpg/V_rTpH2l9uI/AAAAAAAAfQg/PWlcr3A1cf4qZLkT0aZOegskl2DGXfK7gCLcB/s1600/poeship3.jpg"
				/>
				<p>
					Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
					classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin
					professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
					consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical
					literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
					of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
					book is a treatise on the theory of ethics, very popular
				</p>
			</div>

			<ul className="list-group list-group-horizontal">
				<li className="list-group-item flex-fill">Model</li>
				<li className="list-group-item flex-fill">Manufacturer</li>
				<li className="list-group-item flex-fill">Cost in credits</li>
				<li className="list-group-item flex-fill">Length</li>
				<li className="list-group-item flex-fill">Crew</li>
				<li className="list-group-item flex-fill">Passengers</li>
			</ul>
			<ul className="list-group list-group-horizontal">
				<li className="list-group-item flex-fill ">{location.state.props.vehicles.model}</li>
				<li className="list-group-item flex-fill">{location.state.props.vehicles.manufacturer}</li>
				<li className="list-group-item flex-fill">{location.state.props.vehicles.cost_in_credits}</li>
				<li className="list-group-item flex-fill">{location.state.props.vehicles.length}</li>
				<li className="list-group-item flex-fill">{location.state.props.vehicles.crew}</li>
				<li className="list-group-item flex-fill">{location.state.props.vehicles.passengers}</li>
			</ul>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
