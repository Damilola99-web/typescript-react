import React, { createContext, useReducer } from 'react';

const initialState = { theme: 'light' };
type themeContextProp = {
	children: React.ReactNode;
};

type stateType = {
	theme: 'dark' | 'light';
};
enum theme {
	light = 'light',
	dark = 'dark'
}
type actionType = {
	type: 'CHANGE_THEME';
	payload: any;
};

const reducer = (state: stateType, action: actionType) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			return { ...state, theme: action.payload };
		default:
			return state;
	}
};

export const ThemeContext = createContext({ theme: 'dark' });

export const ThemeProvider = ({ children }: themeContextProp) => {
	const [ state, dispatch ] = useReducer(reducer, initialState);
	const changeTheme = (theme: 'light' | 'dark') => {
		dispatch({ type: 'CHANGE_THEME', payload: theme });
	};
	return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>;
};
