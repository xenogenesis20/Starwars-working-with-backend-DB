const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			apiAddress: "https://3000-silver-jaguar-w4tijre8.ws-us11.gitpod.io",
			user: "mike",
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			// addFavorite: (name,entityId,entityType,) => {
			// 	let newFavorites = getStore().favorites;
			// 	newFavorites.push(name);

			// 	setStore({ favorites: newFavorites });
			// },
			addFavorite: (name, entityId, entityType) => {
				if (entityType == "person") {
					var entType = "/favorite/person/";
				} else {
					var entType = "/favorite/planet";
				}
				fetch(getStore().apiAddress + entType + entityId, {
					method: "POST",
					headers: { "Content-Type": "application/json" },
					body: JSON.stringify({
						name: name,
						user_name: getStore().user
					})
				})
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
					})
					.catch(function(err) {
						console.log("Fetch Error :-S", err);
					});
			},

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadFavorites: () => {
				fetch(getStore().apiAddress + "/" + getStore().user + "/favorites")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						// Read the response as json.
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log(responseAsJson);
						setStore({ favorites: responseAsJson.all_favorites });
					})
					.catch(function(err) {
						console.log("Fetch Error :-S", err);
					});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
