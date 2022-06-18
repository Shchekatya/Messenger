import { ERROR, GET_COMMENTS, LOADING } from "../../actions/actions"

const initialState = {
    comments: [],
    loading: false,
    error: null
}

export const commentsReducer = (state=initialState, action) => {
    switch (action.type) {
        case LOADING: 
        return {
            ...state,
            loading: true
        }
        case GET_COMMENTS:
            return {
                ...state,
                comments: action.payload,
                loading: false
            }
        case ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

export const loadComments = () => {
    return async dispatch => {
        dispatch({type: LOADING})
        try {
            const response = await fetch ('https://jsonplaceholder.typicode.com/comments');
        const data = await response.json();
        dispatch({type: GET_COMMENTS, payload: data})
        } catch (e) {
            dispatch({type: ERROR, payload: e.toString()})
        }
        
    }
}