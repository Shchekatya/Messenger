import { combineReducers, createStore } from "redux";
import { chatListReducer } from "./chatListReducer";

import { profileReducer } from "./reducer";

export const store = createStore(combineReducers({
    profile: profileReducer,
    chatsList: chatListReducer,   
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());