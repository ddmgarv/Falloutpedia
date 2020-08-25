import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as optionsActions from '../../redux/actions/optionsActions';
import NavItems from './NavItems';
import Loader from '../Utilities/Loader';
import './nav.scss';

class Nav extends Component {
	componentDidMount() {
		this.props.getOptions();
	}
	render() {
		const { loading, error, navData, dropdown } = this.props;
		return (
			<nav className='nav__wrapper'>
				<div className='nav__container'>
					{loading && (
						<div className='centered-container-full'>
							<Loader color={'#7d5a0d'} />
						</div>
					)}
					<NavItems navData={navData} dropdown={dropdown} handleDropdown={this.props.handleDropdown} />
				</div>
			</nav>
		);
	}
}

const mapStateToProps = (state) => state.optionsReducer;

export default connect(mapStateToProps, optionsActions)(Nav);
