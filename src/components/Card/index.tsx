import './index.scss';
import defaultPokemon from '../../assets/images/pokemon_default.png';
import { Type } from '../../models/Pokemon';

const Card = ({
	name,
	type,
	pokedex,
	onClick,
	icon,
}: {
	name: string;
	type: Type[];
	pokedex: number;
	onClick: any;
	icon: string;
}) => {
	let _style: React.CSSProperties = {
		borderRadius: '10px',
		border: '2px solid black',
		padding: '5x',
		textAlign: 'center',
		textTransform: 'capitalize',
		boxShadow: '10px 7px 10px gray',
	};

	if (type) {
		if (type.length === 2) {
			_style.background = `linear-gradient(var(--${type[0].type.name!}), var(--${type[1].type.name!}))`;
		} else {
			_style.background = `var(--${type[0].type.name!})`;
		}
	}

	return (
		<div className='card' style={_style} onClick={onClick}>
			<img src={icon ? icon : defaultPokemon} alt='pkm' className='img' />
			<h2>{name}</h2>
			<h3>#{pokedex}</h3>
		</div>
	);
};

export default Card;
