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
				<button
					class="Pallete__btn"
					onClick={this.toggle}
					aria-label="Toggle pallete"
				>
					<svg
						fill="currentColor"
						height="24"
						viewBox="0 0 24 24"
						width="24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z" />
						<path d="M0-.75h24v24H0z" fill="none" />
					</svg>
				</button>
			</div>
		);
	}
}
