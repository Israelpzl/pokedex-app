import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Pokemon } from '../../models/Pokemon';
import { getPokemon } from '../../server/pokeService';
import './index.scss';

const Pokemons = () => {
	const [params] = useSearchParams();
	const [pokemon, setPokemon] = useState<Pokemon>();

	useEffect(() => {
		getPokemon(params.get('name')!).then(pokemon => {
			setPokemon(pokemon);
		});
	}, []);

	return (
		<div className='content-pokemon'>
			<h1>{pokemon?.id}</h1>
		</div>
	);
};

export default Pokemons;
