import * as types from "../../actions/actions";

const initialState = {
    user: null,
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGOUT_START:
            return {
                ...state,
                user: null,
            }
        case types.REGISTER_START: 
        case types.LOGIN_START:        
            return {
                ...state,
                loading: true
            }
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                user: action.payload,
                loading: false
            }
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false
            }

        default:
            return state
    }
}

