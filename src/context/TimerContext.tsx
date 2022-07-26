import React, { createContext, useReducer } from 'react';

type contextProp = {
	children: React.ReactNode;
};
type contextValue = null | {
	promodoro: number;
	long: number;
	short: number;
	changePromodoro: (value: number) => void;
	changeLong: (value: number) => void;
	changeShort: (value: number) => void;
};

type stateType = {
	promodoro: number;
	long: number;
	short: number;
};

type actionType = {
	type: 'CHANGE_PROMODORO' | 'CHANGE_LONG' | 'CHANGE_SHORT';
	payload: number;
};

const timerReducer = (state: stateType, action: actionType) => {
	switch (action.type) {
		case 'CHANGE_PROMODORO':
			return { ...state, promodoro: action.payload };
		case 'CHANGE_LONG':
			return { ...state, long: action.payload };
		case 'CHANGE_SHORT':
			return { ...state, short: action.payload };
		default:
			return state;
	}
};

export const TimerContext = createContext<contextValue>(null);

export const TimerProvider = ({ children }: contextProp) => {
	const [ state, dispatch ] = useReducer(timerReducer, {
		promodoro: 25,
		long: 10,
		short: 3
	});

	const changePromodoro = (value: number) => {
		dispatch({ type: 'CHANGE_PROMODORO', payload: value });
	};
	const changeLong = (value: number) => {
		dispatch({ type: 'CHANGE_LONG', payload: value });
	};
	const changeShort = (value: number) => {
		dispatch({ type: 'CHANGE_SHORT', payload: value });
	};

	return (
		<TimerContext.Provider value={{ ...state, changeLong, changePromodoro, changeShort }}>
			{children}
		</TimerContext.Provider>
	);
};
