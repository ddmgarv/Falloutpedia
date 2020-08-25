import React, { Component } from 'react';
import { home } from '../../constants/content';
import './home.scss';

class Home extends Component {
	render() {
		return (
			<section className='home'>
				<div className='home__container'>
					{home.map((item, index) => (
						<div className='home__container--items' key={index}>
							<div>
								<img src={item.img} alt='fallout background' />
							</div>
							<p>{item.p}</p>
						</div>
					))}
				</div>
			</section>
		);
	}
}

export default Home;
