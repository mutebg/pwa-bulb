import { h, Component } from 'preact';
import style from './style';
import Color from '../../components/color';
import Palletes from '../../lib/palettes';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				{Palletes.map(row =>
					(<div class={style.row}>
						{row.hexes.map(color => <Color value={color} />)}
					</div>)
				)}
			</div>
		);
	}
}
