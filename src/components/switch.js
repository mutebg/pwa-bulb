import { h } from 'preact';

const Switch = ({ value, onSwitch }) => {
	const onClickBind = () => onSwitch(!value);
	return (
		<button
			class={`Switch Switch--${value ? 'yes' : 'no'}`}
			onClick={onClickBind}
		>
			<span class="Switch__point" />
		</button>
	);
};

export default Switch;
