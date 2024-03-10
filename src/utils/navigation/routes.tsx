import { createBrowserRouter } from 'react-router-dom';
import Pokedex from '../../pages/pokedex';
import Pokemons from '../../pages/pokemon';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Pokedex />,
	},

	{
		path: '/pokedex',
		element: <Pokedex />,
	},

	{
		path: '/pokemon',
		element: <Pokemons />,
	},
]);
