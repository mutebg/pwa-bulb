import { h, Component } from 'preact';
import Color from './color';

export default class Pallete extends Component {
	state = {
		isOpen: false,
		palletes: []
	};

	toggle = () => {
		//load palletes asycnc on the very first time click toggle button
		if (this.state.palletes.length === 0 && this.state.isOpen === false) {
			import('../lib/palettes').then(palletes => {
				this.setState({
					palletes: palletes.default
				});
			});
		}

		this.setState({
			isOpen: !this.state.isOpen
		});
	};

	render({ onSelect, color: current }, { isOpen, palletes }) {
		return (
			<div class={`Pallete Pallete--${isOpen ? 'open' : 'close'}`}>
				<div class="Pallete__wrapper">
					{palletes.map(row =>
						(<div class="Pallete__row">
							{row.hexes.map(color => {
								const isSelected = color === current;
								return (
									<Color
										value={color}
										isSelected={isSelected}
										onSelect={onSelect}
									/>
								);
							})}
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
