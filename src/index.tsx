import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NewProvider } from './context/Reducer';
import { TimerProvider } from './context/TimerContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	<React.StrictMode>
		<NewProvider>
			<TimerProvider>
				<App />
			</TimerProvider>
		</NewProvider>
	</React.StrictMode>
);
