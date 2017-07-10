import { h, Component } from 'preact';
import palletes from '../../lib/palettes';
import Color from '../color';

export default class Pallete extends Component {
	state = {
		isOpen: false
	};

	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render({ onSelect }, { isOpen }) {
		return (
			<div class={`Pallete Pallete--${isOpen ? 'open' : 'close'}`}>
				<div class="Pallete__wrapper">
					{palletes.map(row =>
						(<div class="Pallete__row">
							{row.hexes.map(color =>
								<Color value={color} onSelect={onSelect} />
							)}
						</div>)
					)}
				</div>
				<button class="Pallete__btn" onClick={this.toggle}>
					+
				</button>
			</div>
		);
	}
}
