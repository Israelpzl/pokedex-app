import { useNavigate } from 'react-router-dom';
import './index.scss';
import { getAllPokemon, getPokemon } from '../../server/pokeService';
import { useEffect, useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import Card from '../../components/Card';
import CardList from '../../components/CardList';
import Header from '../../components/Header';

const Pokedex = () => {
	const navigate = useNavigate();
	const [pokemons, setPokeons] = useState<Pokemon[]>();

	useEffect(() => {
		getAllPokemon().then(response => {
			let promises: Promise<Pokemon>[] = [];
			response.results?.map((poke: { name: string }) => {
				promises.push(
					getPokemon(poke.name).then(pokemon => {
						return pokemon;
					}),
				);
			});

			Promise.all(promises).then(pokemon => {
				setPokeons(pokemon);
			});
		});
	}, []);

	const handleNavigate = (pokemon: Pokemon) => {
		localStorage.setItem('pokemon', JSON.stringify(pokemon));
		navigate(`/pokemon?name=${pokemon?.name}`);
	};

	return (
		<>
			<div className='pokedex-page-header'>
				<h1>POKÉDEX</h1>
			</div>

			<div className='pokedex-page-content'>
				<CardList>
					{pokemons &&
						pokemons?.map((poke: Pokemon, index: number) => (
							<Card
								key={index}
								icon={poke?.sprites.other?.home.front_default as string}
								type={poke?.types!}
								name={poke?.name}
								pokedex={poke?.id}
								onClick={() => handleNavigate(poke)}
							/>
						))}
				</CardList>
			</div>
		</>
	);
};

export default Pokedex;
