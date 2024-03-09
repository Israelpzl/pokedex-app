import { useNavigate } from 'react-router-dom';
import './index.scss';
import { getAllPokemon } from '../../server/pokeService';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../models/Pokemon';

const Pokedex = () => {
	const navigate = useNavigate();
	const [pokemons, setPokeons] = useState<Pokemon[]>();

	useEffect(() => {
		getAllPokemon().then(response => {
			setPokeons(response.results);
		});
	}, []);
	return (
		<>
			<div className='content-home'>
				<h1>POKÉDEX</h1>
				{pokemons?.map((poke: Pokemon, index: number) => (
					<li
						key={index}
						onClick={() => {
							navigate(`/pokemon?name=${poke?.name}`);
						}}
					>
						{poke.name}
					</li>
				))}
			</div>
		</>
	);
};

export default Pokedex;
