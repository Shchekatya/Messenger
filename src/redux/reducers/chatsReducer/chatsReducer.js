const initialState = {
    chats: [
        {
            id: 1,
            name: "Katya"
        },
        {
            id: 2,
            name: "Rinat"
        },
    ]
}

export const chatsReducer = (state=initialState, action) => {
    switch (action.type) {



        default:
            return state
    }
}