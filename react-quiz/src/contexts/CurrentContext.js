import { createContext, useReducer } from "react";
import {data} from '../data';

const initialState = {
    data,
    currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    return state;
};

export const CurrentContext = createContext();

export const CurrentProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>;
};

