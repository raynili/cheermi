// how app state changes in response to changes

const reducer = (state, action) => {
    switch(action.type) {
        case 'GET_POSTS':
            return {
                ...state,
                loading: false,
                posts: action.payload.reverse()
            }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(post => post._id !== action.payload) // keep every post that doesn't have the id of the one we want to delete
            }
        case 'ADD_POST':
            return {
                ...state,
                posts: [action.payload, ...state.posts]
            }
        case 'LIKE_POST': // need to add a state change to the prayers number or else will not automatically rerender
            return {
                ...state,
                posts: state.posts.map(post => {
                    if (post._id === action.payload)
                        return {...post, prayers: post.prayers + 1}
                    return post;
                })
            }
        case 'POST_ERROR':
            return {
                ...state,
                error: action.payload // can access in components if display error later
            }
        default:
            return state;
    }
};

export default reducer;