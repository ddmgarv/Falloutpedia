import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import PowerArmor from './components/PowerArmor';
import Gallery from './components/Gallery';
import { BrowserRouter, Route } from 'react-router-dom';
import { auth } from './database';
import Loader from './components/Utilities/Loader';
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
				<div className='centered-container-full'>
					<Loader />
				</div>
			) : (
				<BrowserRouter>
					<Nav />
					<Route path={'/home'} component={Home} />
					<Route path={'/power_armor'} component={PowerArmor} />
					<Route path={'/gallery'} component={Gallery} />
					<Route path={'/registrate'} component={PowerArmor} />
				</BrowserRouter>
			)}
		</main>
	);
}

export default App;
