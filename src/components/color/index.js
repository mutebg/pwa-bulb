import { h, Component } from 'preact';

const Color = ({ value, isSelected, onSelect }) =>
	(<button
		class={`Color ${isSelected ? 'Color--selected' : ''}`}
		style={{ backgroundColor: value }}
		onClick={() => onSelect(value)}
	>
		Change color to: {value}
	</button>);

export default Color;
