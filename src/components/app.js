import { h, Component } from 'preact';
import Switch from './switch';
import Pallete from './pallete';
import Bulb from './bulb';
import { connect, powerOn, powerOff, setColor, hexToRgb } from '../lib/bulb';

export default class App extends Component {
	state = {
		bulbStatus: false,
		device: false,
		color: '#fff'
	};

	onSwitch = bulbStatus => {
		if (bulbStatus) {
			powerOn(this.state.device);
		}
		else {
			powerOff(this.state.device);
		}
		this.setState({
			bulbStatus
		});
	};

	connect = () => {
		connect().then(characteristic => {
			this.setState({
				device: characteristic
			});
		});
	};

	changeColor = color => {
		setColor(this.state.device, ...hexToRgb(color));
		this.setState({
			color
		});
	};

	render(props, { bulbStatus, device, color }) {
		return (
			<div>
				<Pallete color={color} onSelect={this.changeColor} />
				<div class="Main">
					<Bulb color={color} isOn={bulbStatus} />
				</div>
				<footer class="Bar">
					{!device
						? <button class="Bar__connect" onClick={this.connect}>
								Connect to device
						</button>
						: <div>
							<div
								class={`Bar__title Bar__title--${bulbStatus ? 'on' : 'off'}`}
							>
								<div class="Bar__text Bar__text--off">
										Light is <strong>off</strong>
								</div>
								<div class="Bar__text Bar__text--on">
										Light is <strong>on</strong>
								</div>
							</div>
							<Switch onSwitch={this.onSwitch} value={bulbStatus} />
						</div>}
				</footer>
			</div>
		);
	}
}
