import React, { createContext, useReducer } from 'react';


type contextProp = {
	children: React.ReactNode;
};

type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"

type themeState = {
	font : fonts
};

type actionDispatch = {
	type: 'CHANGE_FONT';
	payload: fonts ;
};

type loadedContext = {
	state : themeState
	changeFont : (font: fonts) => void
}

type contextType = loadedContext | null

const numberReducer = (state: themeState , action: actionDispatch) => {
	switch (action.type) {
		case 'CHANGE_FONT' :
			return {...state, font: action.payload}	
		default:
			return state;
	}
};

export const newContext = createContext<contextType>(null);

export const NewProvider = ({ children }: contextProp) => {
	
	const [state, dispatch] = useReducer(numberReducer, {font: "'Kumbh Sans', sans-serif"})
	const changeFont = (font : fonts) => {
		dispatch({ type: 'CHANGE_FONT', payload: font });
	};
	return <newContext.Provider value={{ state, changeFont }}>{children}</newContext.Provider>;
};
