import { h, Component } from 'preact';
import style from './style';

export default class Color extends Component {
	render({ value }, state) {
		return <button class={style.color} style={{ backgroundColor: value }} />;
	}
}
