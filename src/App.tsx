
import { useState } from 'react';
import './App.css';
import Settings from './components/Settings';
import { useTheme } from './hooks/useTheme';
import { useTimer } from './hooks/useTimer';

const App = () => {
	const theme = useTheme();
	const timer = useTimer()
	const [isSettingsOpen, setIsSettingsOpen] = useState(false)

	const state = theme?.state;
	const cl = timer?.changeLong 
	const cs = timer?.changeShort
	const short = timer?.short
	const long = timer?.long
	console.log(state);
	return (
		<div style={{ backgroundColor: '#1e213f', fontFamily: state?.font }} className="App w-screen h-screen text-white text-xl">
			<h1>Promodoro</h1>
			<p>Be productive the right way.</p>
			<p>long :{long}</p>
			<p>short :{short}</p>
			<button onClick={()=>cl?.(9)}>cl</button>
			{isSettingsOpen && <Settings setIsSettingsOpen={setIsSettingsOpen} />}
			<button onClick={()=>setIsSettingsOpen(true)}>settings</button>
		</div>
	);
};

export default App;
