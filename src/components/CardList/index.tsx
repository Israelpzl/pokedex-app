import { ReactNode } from 'react';
import './index.scss';

type Props = {
	children: ReactNode;
};

const CardList = (props: Props) => {
	return (
		<>
			<div className='card-list'>{props.children}</div>
		</>
	);
};

export default CardList;
