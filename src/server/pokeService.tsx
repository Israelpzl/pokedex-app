const API_URL = 'https://pokeapi.co/api/v2';

export const getAllPokemon = () => {
	//pokemon?limit=151
	return fetch(`${API_URL}/pokemon`).then(response => {
		return response.json();
	});
};

export const getPokemon = (pokemon: string) => {
	return fetch(`${API_URL}/pokemon/${pokemon}`).then(response => {
		return response.json();
	});
};
