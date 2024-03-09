import { createBrowserRouter } from 'react-router-dom';
import Home from '../../pages/pokedex';
import Pokemons from '../../pages/pokemon';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},

	{
		path: '/pokedex',
		element: <Home />,
	},

	{
		path: '/pokemon',
		element: <Pokemons />,
	},
]);
