import React from 'react';
import { falloutLogo } from '../../constants/imgs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faGamepad, faChevronRight, faImage, faInfo, faRegistered } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavItems = ({ navData, dropdown, handleDropdown }) => {
	const icons = [faHome, faGamepad, faImage, faInfo, faRegistered];
	const { options, games } = navData;
	return (
		<ul className='nav__list'>
			<li>
				<img src={falloutLogo} alt='' className='img' />
			</li>
			{options.map((option, index) =>
				option.route === 'games' ? (
					<>
						<li className='nav__list--item' onClick={handleDropdown} key={option.route}>
							<Link>
								<FontAwesomeIcon style={{ width: '40px' }} icon={icons[index]} />
								{option.label}
								<FontAwesomeIcon icon={faChevronRight} className={dropdown ? 'chevron active' : 'chevron'} />
							</Link>
						</li>
						<div className={dropdown ? 'games-container show' : 'games-container'}>
							<ul className='games__container--list'>
								{games.map((game) => (
									<li className='item'>{game.label}</li>
								))}
							</ul>
						</div>
					</>
				) : (
					<li className='nav__list--item' key={option.route}>
						<Link to={`/${option.route}`}>
							<FontAwesomeIcon style={{ width: '40px' }} icon={icons[index]} />
							{option.label}
						</Link>
					</li>
				)
			)}
		</ul>
	);
};

export default NavItems;
