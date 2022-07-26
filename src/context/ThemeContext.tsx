import React, { createContext, useReducer } from 'react';


type contextProp = {
	children: React.ReactNode;
};

type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'

type themeState = {
	theme : theme
};

type actionDispatch = {
	type: 'CHANGE_THEME';
	payload: theme ;
};

type loadedContext = {
	state : themeState
	changeTheme : (theme: theme) => void
}

type contextType = loadedContext | null

const numberReducer = (state: themeState , action: actionDispatch) => {
	switch (action.type) {
		case 'CHANGE_THEME' :
			return {...state, theme: action.payload}	
		default:
			return state;
	}
};

export const ThemeContext = createContext<contextType>(null);

export const ThemeContextProvider = ({ children }: contextProp) => {
	
	const [state, dispatch] = useReducer(numberReducer, {theme: '#e74f4f' })
	const changeTheme = (theme : theme) => {
		dispatch({ type: 'CHANGE_THEME', payload: theme });
	};
	return <ThemeContext.Provider value={{ state, changeTheme }}>{children}</ThemeContext.Provider>;
};
