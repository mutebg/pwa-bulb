import { h, Component } from 'preact';
import Switch from './switch';
import Pallete from './pallete';
import Bulb from './bulb';
import { connect, powerOn, powerOff, setColor, hexToRgb } from '../lib/bulb';
import { readStore, writeStore } from '../lib/store';

export default class App extends Component {
	state = {
		bulbStatus: false,
		device: false,
		color: typeof window !== 'undefined' ? readStore('color') || '#fff' : '#fff'
	};

	onSwitch = bulbStatus => {
		if (bulbStatus) {
			powerOn(this.state.device).then(() => {
				setColor(this.state.device, this.state.color);
			});
		}
		else {
			powerOff(this.state.device);
		}
		this.setState({
			bulbStatus
		});
	};

	connect = () => {
		connect(this.onDisconnected).then(characteristic => {
			setColor(characteristic, this.state.color);
			this.setState({
				device: characteristic
			});
		});
	};

	onDisconnected = () => {
		this.setState({
			device: false
		});
	};

	changeColor = color => {
		setColor(this.state.device, color);
		writeStore('color', color);
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
