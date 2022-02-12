import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    chatId: null
}

export const chatSlice = createSlice({
    name: "chat",
    initialState, 
    reducers: {
        enterChat: (state, actions)=> {
            state.chatId = actions.payload
        },
        exitChat: (state)=> {
            state.chatId = null
        }
    }
})

export const {enterChat, exitChat} = chatSlice.actions;

export const selectChatId = (state) => state.chat.chatId;

export default chatSlice.reducer