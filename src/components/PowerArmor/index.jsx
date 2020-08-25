import React from 'react';
import { getDocumentFB } from '../../database/firebaseUtils';
import { storage } from '../../database/';
import './powerarmor.scss';

class PowerArmor extends React.Component {
	state = {
		data: [],
	};

	async componentDidMount() {
		const res = await getDocumentFB('/app/power_armor_section');

		// const imgsRef = storage.ref('/gallery/fallout_2');

		// const response = await imgsRef.listAll();
		// console.log(response);

		this.setState({ data: res.data });
	}

	render() {
		const { data } = this.state;
		return (
			<section className='powerArmor'>
				{data.map((item) => (
					<div className='powerArmor__container' key={item.title}>
						<h3>{item.title}</h3>
						<div className='powerArmor__container--description'>
							<p>{item.description}</p>
							<div>{item.img && <img src={item.img} alt={item.title} />}</div>
						</div>
					</div>
				))}
			</section>
		);
	}
}

export default PowerArmor;
