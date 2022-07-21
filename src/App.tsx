import React from 'react';
import './App.css';
import Greet from './components/Greet';
import { useTheme } from './hooks/useTheme';

const App = () => {
	const { theme } = useTheme()
	return (
		<div className="App">
			<Greet name='korede' count={8} style={{backgroundColor: 'white'}} />
			<p>{theme}</p>
		</div>
	);
};

export default App;
