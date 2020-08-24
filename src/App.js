import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import PowerArmor from './components/PowerArmor';
import Gallery from './components/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<main className='app'>
			<BrowserRouter>
				<Nav />
				<Route path={'/'} component={PowerArmor} />
				<Route path={'/inicio'} component={Home} />
				<Route path={'/galería'} component={Gallery} />
				<Route path={'/regístrate'} component={PowerArmor} />
			</BrowserRouter>
		</main>
	);
}

export default App;
