// Data layer setup; keep track of user/basket

import React, { createContext, useContext, useReducer } from "react";

// Data layer
export const StateContext = createContext();

// Provider created; children is App
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}> 
        {children}
    </StateContext.Provider>
);

// How it's used inside a component
export const useStateValue = () => useContext(StateContext);