import React from 'react';
import './App.css';
import Greet from './components/Greet';

const App = () => {
	
	return (
		<div className="App">
			<Greet name='korede' count={9} />
		</div>
	);
};

export default App;
