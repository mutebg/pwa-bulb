import { h, Component } from 'preact';

export default class Bulb extends Component {
	render({ color, isOn }) {
		return (
			<div
				class={`Bulb Bulb--${isOn ? 'on' : 'off'}`}
				style={`color: ${isOn ? color : '#cacaca'}`}
			>
				<div class="Bulb__circle" />
				<div class="Bulb__glow" />
			</div>
		);
	}
}
