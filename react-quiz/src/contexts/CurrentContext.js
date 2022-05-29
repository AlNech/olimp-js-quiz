import { createContext, useReducer } from "react";
import {data} from '../data';

const initialState = {
    data,
    showFinal: false,
    currentQuestionIndex: 0,
};

const reducer = (state, action) => {
    switch(action.type){
        case "NEXT_QUESTION": {
            const showFinal = state.currentQuestionIndex === state.data.length - 1;
            const currentQuestionIndex = showFinal ? state.currentQuestionIndex : state.currentQuestionIndex + 1
            return{
                ...state,
                currentQuestionIndex,
                showFinal,
            };
        }
    }
    return state;
};

export const CurrentContext = createContext();

export const CurrentProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <CurrentContext.Provider value={value}>{children}</CurrentContext.Provider>;
};

