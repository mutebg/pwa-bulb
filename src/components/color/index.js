import { h, Component } from 'preact';

export default class Color extends Component {
	render({ value }, state) {
		return <button class="Color" style={{ backgroundColor: value }} />;
	}
}
