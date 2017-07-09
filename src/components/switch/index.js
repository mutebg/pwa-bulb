import { h, Component } from 'preact';

export default class Switch extends Component {
	state = {
		value: false
	};

	onSwitch = () => {
		this.setState(
			{
				value: !this.state.value
			},
			() => {
				this.props.onSwitch(this.state.value);
			}
		);
	};

	constructor(props) {
		super(props);

		this.state = {
			value: this.props.value
		};
	}

	render(props, state) {
		let classes = 'Switch ' + (state.value ? 'Switch--yes' : '');

		return (
			<button class={classes} onClick={this.onSwitch}>
				<span class="Switch__point" />
			</button>
		);
	}
}
