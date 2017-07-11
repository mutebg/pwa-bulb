import { h, Component } from 'preact';

const Color = ({ value, onSelect }) =>
	(<button
		class="Color"
		style={{ backgroundColor: value }}
		onClick={() => onSelect(value)}
	>
		Change color to: {value}
	</button>);

export default Color;
