import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import PowerArmor from './components/PowerArmor';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<main className='app'>
			<BrowserRouter>
				<Nav />
				<Route path={'/inicio'} component={Home} />
				<Route path={'/'} component={PowerArmor} />
			</BrowserRouter>
		</main>
	);
}

export default App;
