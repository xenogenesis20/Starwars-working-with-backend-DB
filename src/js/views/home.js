import React, { useState, useEffect } from "react";
import "../../styles/home.scss";
import { Card } from "../component/Card";

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
		<div className="container-fluid">
			<h1>Characters</h1>
			<div className="d-flex">
				{characters.length > 1 &&
					characters.map((character, index) => (
						<Card
							person={character}
							key={index}
							label1={"Height: "}
							label2={"Gender: "}
							label3={"Eye Color: "}
							cardImg={
								"https://urbanmatter.com/chicago/wp-content/uploads/2017/12/24274905_135016233805381_3220016546080358400_n.jpg"
							}
						/>
					))}
			</div>
			<h1>Planets</h1>
			<div />
			<div>
				<h1>Vehicles</h1>
			</div>
		</div>
	);
};
