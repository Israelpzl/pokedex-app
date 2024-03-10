import {
	ButtonHTMLAttributes,
	CSSProperties,
	DetailedHTMLProps,
	FunctionComponent,
} from 'react';

export interface IButtonProps
	extends DetailedHTMLProps<
		ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	backgraungColor?: string;
	color?: string;
}

const ButtonPrimary: FunctionComponent<IButtonProps> = props => {
	const { children, backgraungColor, color, style } = props;

	let _style: CSSProperties = style || {};

	if (backgraungColor) _style.backgroundColor = backgraungColor;
	if (color) _style.color = color;

	return (
		<button style={_style} {...props}>
			{children}
		</button>
	);
};

export default ButtonPrimary;
