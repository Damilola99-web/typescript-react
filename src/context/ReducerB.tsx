import React, {  useReducer } from 'react';

type theme = '#e74f4f' | 'green' | 'rgb(219 39 119)'
type fonts = "'Kumbh Sans', sans-serif" | "'Roboto Slab', serif" | "'Space Mono', monospace"
type themeState = {
	font : string
	theme : string
};



type actionDispatch = {
	type: 'CHANGE_THEME' | 'CHANGE_FONT';
	payload: theme | fonts;
};



const numberReducer = (state: themeState, action: actionDispatch) => {
	switch (action.type) {
		case 'CHANGE_THEME':
			return { ...state, theme: action.payload };
		case 'CHANGE_FONT' :
			return {...state, font: action.payload}	
		default:
			return state;
	}
};

export const ReducerB = ()=>{
    const [ state, dispatch ] = useReducer(numberReducer, {theme: '#e74f4f', font : "'Kumbh Sans', sans-serif"});

    return {state, dispatch}
}