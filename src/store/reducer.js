import { MINUS, PLUS } from "./action";

const initialState = {
    count: 0,
};

export const profileReducer = ( state = initialState, action) => {
    switch (action.type) {
        case PLUS: {
            return {
                ...state,
                count: state.count+1,
            };        
        }
        case MINUS: {
            return {
                ...state,
                count: state.count-1,
            }; 
        }
        default:
            return state;
    }
};

