import { h, Component } from 'preact';

const Bulb = ({ color, isOn }) =>
	(<div
		class={`Bulb Bulb--${isOn ? 'on' : 'off'}`}
		style={`color: ${isOn ? color : '#cacaca'}`}
	>
		<div class="Bulb__circle" />
		<div class="Bulb__glow" />
	</div>);

export default Bulb;
