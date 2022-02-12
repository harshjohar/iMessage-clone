import { Avatar } from "@mui/material";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { enterChat, selectChatId } from "../features/chatSlice";
import { auth } from "../firebase";

export const ChatButton = ({ id, data }) => {
    const [user] = useAuthState(auth);

    const name = data.users[0] === user.email ? data.users[1] : data.users[0];

    const dispatch = useDispatch();
    const openChat = () => {
        dispatch(enterChat(id));
    };
    
    const chatId = useSelector(selectChatId);


    return (
        <div
            onClick={openChat}
            className={`flex items-center justify-center md:justify-start p-2 cursor-pointer hover:bg-gray-300 space-x-2 ${chatId===id ? "bg-gray-300":""}`}
        >
            <Avatar />
            <p className="truncate hidden md:inline">{name}</p>
        </div>
    );
};
