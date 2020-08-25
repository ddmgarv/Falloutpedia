import React, { Component } from 'react';
import Gallery from './Gallery';
import { f1i1, f1i2, f1i3, f2i1, f2i2, f2i3, f3i1, f3i2, f3i3, fti1, fti2, fti3, f1wp, f2wp, f3wp, ftwp } from '../../constants/imgs';
import './gallery.scss';

export default class index extends Component {
	state = {
		images: {
			f1: [
				'https://firebasestorage.googleapis.com/v0/b/falloutpedia.appspot.com/o/gallery%2Ffallout_1%2Ff1i1.jpg?alt=media&token=68bd1ced-4ecf-49ab-aa7c-f091862f516c',
				'https://firebasestorage.googleapis.com/v0/b/falloutpedia.appspot.com/o/gallery%2Ffallout_1%2Ff1i2.jpg?alt=media&token=4d4fc704-f425-4220-82a3-a8247d32dff0',
				'https://firebasestorage.googleapis.com/v0/b/falloutpedia.appspot.com/o/gallery%2Ffallout_1%2Ff1i3.jpg?alt=media&token=3744a199-46ec-4a4a-88dc-4046de42fdc4',
			],
			f2: [
				'https://firebasestorage.googleapis.com/v0/b/falloutpedia.appspot.com/o/gallery%2Ffallout_2%2Ff2i1.jpg?alt=media&token=6bd3081a-a93e-4481-88fb-61cdd91a4246',
				'https://firebasestorage.googleapis.com/v0/b/falloutpedia.appspot.com/o/gallery%2Ffallout_2%2Ff2i2.jpg?alt=media&token=9647893f-48b3-488f-83f7-84e914e1712b',
				f2i3,
			],
			f3: [f3i1, f3i2, f3i3],
			ft: [fti1, fti2, fti3],
		},
		fwp: [f1wp, f2wp, ftwp, f3wp],
		galDisplayStatus: false,
		galContent: [],
	};

	unsetGallery() {
		this.setState({ galDisplayStatus: false });
	}

	renderGallery(gameWp) {
		const { images } = this.state;
		switch (gameWp) {
			case f1wp:
				this.setState({
					galDisplayStatus: true,
					galContent: images.f1,
				});
				break;
			case f2wp:
				this.setState({
					galDisplayStatus: true,
					galContent: images.f2,
				});
				break;
			case ftwp:
				this.setState({
					galDisplayStatus: true,
					galContent: images.ft,
				});
				break;
			case f3wp:
				this.setState({
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
				{galDisplayStatus && <Gallery content={galContent} exitGal={this.unsetGallery} />}
			</section>
		);
	}
}
