import { h, Component } from 'preact';

const Switch = ({ value, onSwitch }) =>
	(<button
		class={`Switch Switch--${value ? 'yes' : 'no'}`}
		onClick={() => onSwitch(!value)}
	>
		<span class="Switch__point" />
	</button>);

export default Switch;
