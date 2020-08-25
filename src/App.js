import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import PowerArmor from './components/PowerArmor';
import Gallery from './components/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import { auth } from './database';
import './App.scss';

function App() {
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		(async function () {
			setLoading(true);
			const user = await auth.signInWithEmailAndPassword('garv1998131@gmail.com', '2fb8ec45');
			setLoading(false);
		})();
	}, []);

	return (
		<main className='app'>
			{loading ? (
				<div>Loading</div>
			) : (
				<BrowserRouter>
					<Nav />
					<Route path={'/'} component={PowerArmor} />
					<Route path={'/inicio'} component={Home} />
					<Route path={'/galería'} component={Gallery} />
					<Route path={'/regístrate'} component={PowerArmor} />
				</BrowserRouter>
			)}
		</main>
	);
}

export default App;
