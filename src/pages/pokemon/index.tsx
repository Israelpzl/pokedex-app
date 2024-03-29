import { useEffect, useState } from 'react';
import { Pokemon } from '../../models/Pokemon';
import './index.scss';
import ChartStadistics from '../../components/ChartStadistics';

const Pokemons = () => {
	const [pokemon, setPokemon] = useState<Pokemon>();

	let _style: React.CSSProperties = {};

	_style.background = `linear-gradient(var(--${pokemon?.types[0].type.name!}), black)`;

	useEffect(() => {
		const storage: string = localStorage.getItem('pokemon')!;
		setPokemon(JSON.parse(storage));
	}, []);

	console.log(pokemon?.stats);

	return (
		<div className='pokemon-page'>
			<div className='pokemon-page-header' style={_style}>
				<div>
					<h3>{pokemon?.name}</h3>
				</div>

				<div className='pokemon-page-header__icon'>
					<img
						src={pokemon?.sprites.other?.home.front_default}
						alt={pokemon?.name}
					/>
				</div>
				<div className='pokemon-page-header__number'>
					<h2>#{pokemon?.id}</h2>
				</div>
			</div>
			<div className='pokemon-page-content'>
				<ChartStadistics
					hp={pokemon?.stats[0].base_stat!}
					atk={pokemon?.stats[1].base_stat!}
					def={pokemon?.stats[2].base_stat!}
					atkSp={pokemon?.stats[3].base_stat!}
					defSp={pokemon?.stats[4].base_stat!}
					spe={pokemon?.stats[5].base_stat!}
				/>
			</div>
		</div>
	);
};

export default Pokemons;
