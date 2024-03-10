import './index.scss';
import defaultPokemon from '../../assets/images/pokemon_default.png';

const Card = ({ name, type, pokedex, onClick, icon }: any) => {
	let _style: React.CSSProperties = {
		borderRadius: '10px',
		border: '2px solid black',
		padding: '20px',
		textAlign: 'center',
		margin: '20px',
		textTransform: 'capitalize',
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
