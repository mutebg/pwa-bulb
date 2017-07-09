import { h, Component } from 'preact';
import style from './style';
import Color from '../../components/color';
import Switch from '../../components/Switch';
import Palletes from '../../lib/palettes';
import Bulb from '../../components/bulb';

export default class Home extends Component {
	state = {
		bulbStatus: false
	};

	onSwitch = bulbStatus => {
		this.setState({
			bulbStatus
		});
	};

	render(props, { bulbStatus }) {
		return (
			<div class={style.home}>
				<div class="Main">
					<Bulb color="#19edf0" isOn={bulbStatus} />
				</div>
				<footer class="Bar">
					<div class={`Bar__title Bar__title--${bulbStatus ? 'on' : 'off'}`}>
						<div class="Bar__text Bar__text--off">
							Light is <strong>off</strong>
						</div>
						<div class="Bar__text Bar__text--on">
							Light is <strong>on</strong>
						</div>
					</div>
					<Switch onSwitch={this.onSwitch} value={false} />
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
