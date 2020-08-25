import React from 'react';
import Loader from '../Utilities/Loader';
import * as powerArmorActions from '../../redux/actions/powerArmorActions';
import { storage } from '../../database/';
import { connect } from 'react-redux';
import './powerarmor.scss';

class PowerArmor extends React.Component {
	componentDidMount() {
		this.props.getPowerArmorData();
		// const imgsRef = storage.ref('/gallery/fallout_2');
		// const response = await imgsRef.listAll();
		// console.log(response);
	}

	render() {
		const { powerArmorData, loading, error } = this.props;
		return (
			<section className='powerArmor'>
				{loading && (
					<div className='centered-container-full'>
						<Loader color={'#7d5a0d'} />
					</div>
				)}
				{powerArmorData.map((item) => (
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

const mapStateToProps = (state) => state.powerArmorReducer;

export default connect(mapStateToProps, powerArmorActions)(PowerArmor);
