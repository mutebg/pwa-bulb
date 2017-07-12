import { h } from 'preact';

const Color = ({ value, isSelected, onSelect }) => {
	const onSelectBind = () => onSelect(value);
	return (
		<button
			class={`Color ${isSelected ? 'Color--selected' : ''}`}
			style={{ backgroundColor: value }}
			onClick={onSelectBind}
		>
			Change color to: {value}
		</button>
	);
};

export default Color;
