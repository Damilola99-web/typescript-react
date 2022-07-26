import React, { createContext } from 'react';
import { ReducerB } from './ReducerB';

type contextProp = {
	children: React.ReactNode;
};
export type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'
export type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type themeState = {
	font : string
	theme : string
};


type actionDispatch = {
	type: 'CHANGE_THEME' | 'CHANGE_FONT';
	payload: fonts | theme;
};


type loadedContext = {
	state : themeState
	changeTheme : (theme: theme) => void
	changeFont : (font: fonts) => void
}

type contextType = loadedContext | null


export const newContext = createContext<contextType>(null);

export const NewProvider = ({ children }: contextProp) => {
	
	const {state, dispatch} = ReducerB()
	const changeTheme = (theme : theme) => {
		dispatch({ type: 'CHANGE_THEME', payload: theme });
	};
	const changeFont = (font : fonts) => {
		dispatch({ type: 'CHANGE_FONT', payload: font });
	};
	return <newContext.Provider value={{ state, changeTheme, changeFont }}>{children}</newContext.Provider>;
};
