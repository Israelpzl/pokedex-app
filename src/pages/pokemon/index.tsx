import { useEffect, useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import './index.scss';
import Card from '../../components/Card';

const Pokemons = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();

	useEffect(() => {
		const storage: string = localStorage.getItem('pokemon')!;
		setPokemon(JSON.parse(storage));
	}, []);

	return (
		<div className='content-pokemon'>
			<h1>{pokemon?.name}</h1>
		</div>
	);
};

export default Pokemons;
