import { h, Component } from 'preact';

const Color = ({ value, onSelect }) =>
	(<button
		class="Color"
		style={{ backgroundColor: value }}
		onClick={onSelect.bind(value)}
	/>);

export default Color;
