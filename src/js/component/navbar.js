import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [showDropDown, setShowDropDown] = useState(false);
	const [clickedDropDown, setClickedDropDown] = useState(false);
	let show = "";
	if (clickedDropDown) show = "show";

	return (
		<nav className="navbar navbar-dark bg-dark mb-3 star-bg text-white">
			<Link to="/">
				<img
					className="navLogo"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1024px-Star_Wars_Logo.svg.png"
				/>
			</Link>
			<div className={"dropdown" + (showDropDown ? "show" : "")}>
				<button
					onClick={() => setClickedDropDown(!clickedDropDown)}
					className="btn btn-primary dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded={clickedDropDown}>
					Favorites <span className="badge badge-light">{store.favorites.length}</span>
				</button>
				<div
					className={store.favorites.length > 0 ? "dropdown-menu bg-light " + show : "d-none"}
					aria-labelledby="dropdownMenuButton">
					{store.favorites.map((fav, i) => {
						return (
							<li className="dropdown-item" key={i}>
								{fav}
							</li>
						);
					})}
				</div>
			</div>
		</nav>
	);
};
