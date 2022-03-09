import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import axios from 'axios';

// initial state
// get from database, for now:
const initialState = {
    posts: [],
    error: null,
    loading: true
}

export const GlobalContext = createContext(initialState);

// export the provider so the state info can be used in App.js
export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(AppReducer, initialState);

    // Actions
    async function getPosts() {
        try {
            const res = await axios.get('api/v1/posts');

            dispatch({
                type: 'GET_POSTS',
                payload: res.data.data
            })
        } catch (err) {
            dispatch({
                type: 'POST_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function deletePost(id) {
        try {
            await axios.delete(`api/v1/posts/${id}`);
 
            dispatch({
                type: 'DELETE_POST',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'POST_ERROR',
                payload: err.response.data.error
            });
        }

    }

    async function addPost(post) {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('api/v1/posts', post, config);

            dispatch({
                type: 'ADD_POST',
                payload: res.data.data
            });
        } catch (err) {
            dispatch({
                type: 'POST_ERROR',
                payload: err.response.data.error
            });
        }
    }

    async function likePost(id, user, prayers, liked_by) {
        try {
            await axios.patch(`api/v1/posts/${id}`, { prayers: prayers + 1, liked_by: liked_by.push(user) });
            
            dispatch({
                type: 'LIKE_POST',
                payload: id
            });
        } catch (err) {
            dispatch({
                type: 'POST_ERROR',
                payload: err.response.data.error
            });
        }
    }

    return (<GlobalContext.Provider value={{
        posts: state.posts,
        error: state.error,
        loading: state.loading,
        getPosts,
        deletePost,
        addPost,
        likePost
    }}>
        { children }
    </GlobalContext.Provider>)
    // provides state and actions to the component that its wrapped around
}