import React from 'react';
import './App.css';

import Products from './components/DashboardProducts';
import Navegation from './components/NavBar';


function App() {
	return (
		<>
			<Navegation />

			<div>
				<Products/>
			</div>
		</>
	);
}

export default App;
