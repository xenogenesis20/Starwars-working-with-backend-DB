import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";
import { PlanetCard } from "../component/PlanetCard";

export const Home = () => {
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [vehicles, setVehicles] = useState([]);

	useEffect(() => {
		fetch("https://swapi.dev/api/people/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setCharacters(responseAsJson.results);
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
		fetch("https://swapi.dev/api/planets/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setPlanets(responseAsJson.results);
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
		fetch("https://swapi.dev/api/starships/")
			.then(function(response) {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				// Read the response as json.
				return response.json();
			})
			.then(function(responseAsJson) {
				// Do stuff with the JSON
				setVehicles(responseAsJson.results);
			})
			.catch(function(err) {
				console.log("Fetch Error :-S", err);
			});
	}, []);

	return (
		<div className="container ">
			<h1>Characters</h1>
			<div className="container scrolls">
				<div className="row text-center">
					{characters.length > 1 &&
						characters.map((character, index) => (
							<Card
								person={character}
								key={index}
								ID={index}
								label1={"Height: "}
								label2={"Gender: "}
								label3={"Eye Color: "}
								cardImg={
									"https://urbanmatter.com/chicago/wp-content/uploads/2017/12/24274905_135016233805381_3220016546080358400_n.jpg"
								}
							/>
						))}
				</div>
			</div>
			<h1>Planets</h1>
			<div className="container scrolls">
				<div className="row text-center">
					{planets.length > 1 &&
						planets.map((planet, index) => (
							<PlanetCard
								planet={planet}
								key={index}
								ID={index}
								label1={"diameter: "}
								label2={"Climate: "}
								label3={"Terrain: "}
								cardImg={"https://i.pinimg.com/originals/8a/a9/2c/8aa92c5ba570f0c8d50a97e6bce0a8ea.jpg"}
							/>
						))}
				</div>
			</div>
			<div />
			<div>
				<h1>Vehicles</h1>
			</div>
		</div>
	);
};
