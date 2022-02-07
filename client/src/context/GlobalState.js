import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// initial state
// get from database, for now:
const initialState = {
    posts: [
        { user: 'Rayni Li', post_time: 'Feb 5 2022', text: 'Get 100% on my math test', prayers: 2}
    ]
}

export const GlobalContext = createContext(initialState);

// export the provider so the state info can be used in App.js
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions
    

    return (<GlobalContext.Provider value={{
        posts: state.posts
    }}>
        { children }
    </GlobalContext.Provider>)
    // provides state and actions to the component that its wrapped around
}