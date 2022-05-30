import { ADD_MESSAGES, DELETE_MESSAGES } from "../../actions/actions"

const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            title: "Hello"
        }
    ]
}

export const messagesReducer = (state=initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGES:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !==action.payload)
            }
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }

        default:
            return state
    }
}