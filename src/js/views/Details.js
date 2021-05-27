import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "../../styles/demo.scss";

export const Details = props => {
	return (
		<div className="container">
			<h1>Character Name</h1>
			<div>
				<img
					className="detailImg"
					src="https://geekculture.co/wp-content/uploads/2020/05/mark-hamill-star-wars-luke-skywalker-1.jpg"
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
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
			</ul>
			<ul className="list-group list-group-horizontal">
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
				<li className="list-group-item">An item</li>
				<li className="list-group-item">A second item</li>
				<li className="list-group-item">A third item</li>
			</ul>

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
