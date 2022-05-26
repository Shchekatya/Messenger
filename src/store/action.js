export const PLUS = "plus";
export const MINUS = "minus";
export const ADD_CHAT = "ADD_CHAT";
export const DELETE_CHAT = "DELETE_CHAT";

export const plusCount = {
    type: PLUS,
};

export const minusCount = {
    type: MINUS,
};

export const addChat = (newChat) => ({
    type: ADD_CHAT,
    payload: newChat,
})

export const deleteChat = (idToDelete) => ({
    type: DELETE_CHAT,
    payload: idToDelete,
})