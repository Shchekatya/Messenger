import {applyMiddleware, combineReducers, createStore} from "redux";
import { chatsReducer } from "./reducers/chatsReducer/chatsReducer";
import { messagesReducer } from "./reducers/messagesReducer/messagesReducer";

const time = store => next => action => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action)
    }
    const timeOut = setTimeout(() => next(action), delay)

    return ()=> {
        clearTimeout(time)
    }
}

const logger = store => next => action => {
    let result 
    console.log("before", store.getState())
    console.log("action", action)
    result= next(action)
    console.log("after", store.getState())
    return result

}


export const store = createStore(combineReducers({
    chats: chatsReducer,
    messages: messagesReducer,
}), applyMiddleware(time, logger));

