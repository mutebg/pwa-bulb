import { h, Component } from 'preact';
import style from './style';
import Color from '../../components/color';
import Switch from '../../components/Switch';
import Palletes from '../../lib/palettes';
import Bulb from '../../components/bulb';
import { connect, powerOn, powerOff } from '../../lib/bulb';

export default class Home extends Component {
	state = {
		bulbStatus: false,
		device: false
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

	render(props, { bulbStatus, device }) {
		return (
			<div class={style.home}>
				<div class="Main">
					<Bulb color="#19edf0" isOn={bulbStatus} />
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
				{/* {Palletes.map(row =>
					(<div class={style.row}>
						{row.hexes.map(color => <Color value={color} />)}
					</div>)
				)} */}
			</div>
		);
	}
}
