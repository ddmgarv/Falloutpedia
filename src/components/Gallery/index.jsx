import React, { Component } from 'react';
import Gallery from './Gallery';
import { f1i1, f1i2, f1i3, f2i1, f2i2, f2i3, f3i1, f3i2, f3i3, fti1, fti2, fti3, f1wp, f2wp, f3wp, ftwp } from '../../constants/imgs';
import './gallery.scss';

export default class index extends Component {
	state = {
		images: {
			f1: [f1i1, f1i2, f1i3],
			f2: [f2i1, f2i2, f2i3],
			f3: [f3i1, f3i2, f3i3],
			ft: [fti1, fti2, fti3],
		},
		fwp: [f1wp, f2wp, ftwp, f3wp],
		galDisplayStatus: false,
		galContent: [],
	};

	unsetGallery() {
		const { state } = this;
		this.setState({
			...state,
			galDisplayStatus: false,
		});
	}

	renderGallery(gameWp) {
		const { state } = this;
		const { images } = state;
		switch (gameWp) {
			case f1wp:
				this.setState({
					...state,
					galDisplayStatus: true,
					galContent: images.f1,
				});
				break;
			case f2wp:
				this.setState({
					...state,
					galDisplayStatus: true,
					galContent: images.f2,
				});
				break;
			case ftwp:
				this.setState({
					...state,
					galDisplayStatus: true,
					galContent: images.ft,
				});
				break;
			case f3wp:
				this.setState({
					...state,
					galDisplayStatus: true,
					galContent: images.f3,
				});
				break;
			default:
				break;
		}
	}

	render() {
		const { fwp, galDisplayStatus, galContent } = this.state;
		const { state } = this;
		console.log(state);
		return (
			<section className='galleryWrapper'>
				<h2>Haga click en la caratula de cada juego para desplegar la galería</h2>
				<div className='frontCovers'>
					{fwp.map((fallout, index) => (
						<div className='frontCovers__item' onClick={() => this.renderGallery(fallout)} key={index}>
							<img src={fallout} alt='' />
						</div>
					))}
				</div>
				{galDisplayStatus && <Gallery content={galContent} exitGal={() => this.unsetGallery()} />}
			</section>
		);
	}
}
