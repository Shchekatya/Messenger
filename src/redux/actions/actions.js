import {auth} from "../../firebase";

export const DELETE_MESSAGES="DELETE_MESSAGES";
export const ADD_MESSAGES="ADD_MESSAGES";
export const GET_COMMENTS="GET_COMMENTS"
export const LOADING="LOADING";
export const ERROR="ERROR";

export const REGISTER_START="REGISTER_START";
export const REGISTER_SUCCESS="REGISTER_SUCCESS";
export const REGISTER_ERROR="REGISTER_ERROR";

export const registerStart = () => ({
    type: REGISTER_START,
})
export const registerSuccess = (user) => ({
    type: REGISTER_SUCCESS,
    payload: user
})
export const registerError = (err) => ({
    type: REGISTER_ERROR,
    payload: err
})
export const registerInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(registerStart());
        auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
            dispatch(registerSuccess(user))
        })
        .catch((err) => dispatch(registerError(err.message)))
    }
}

export const LOGIN_START="LOGIN_START";
export const LOGIN_SUCCESS="LOGIN_SUCCESS";
export const LOGIN_ERROR="LOGIN_ERROR";

export const loginStart = () => ({
    type: LOGIN_START,
})
export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user
})
export const loginError = (err) => ({
    type: LOGIN_ERROR,
    payload: err
})

export const loginInitiate = (email, password) => {
    return(dispatch) => {
        dispatch(loginStart())
        auth
            .signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(loginSuccess(user))
            })
            .catch((err) => dispatch(loginError(err.message)))
    }
}

export const LOGOUT_START="LOGOUT_START";
export const LOGOUT_SUCCESS="LOGOUT_SUCCESS";
export const LOGOUT_ERROR="LOGOUT_ERROR";

export const logoutStart = () => ({
    type: LOGOUT_START,
})
export const logoutSuccess = () => ({
    type: LOGOUT_SUCCESS, 
})
export const logoutError = (err) => ({
    type: LOGOUT_ERROR,
    payload: err
})

export const logoutInitiate = () => {
    return(dispatch) => {
        dispatch(logoutStart())
        auth
            .signOut()
            .then(() => dispatch(logoutSuccess()))
            .catch((err) => dispatch(logoutError(err.message)))
    }
}