import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { enterChat } from "../features/chatSlice";
import { auth } from "../firebase";

export const ChatButton = ({ id, data }) => {
    const [user] = useAuthState(auth);
    const dispatch = useDispatch();
    const openChat = () => {
        dispatch(enterChat(id));
    };

    return (
        <div onClick={openChat}>
            {data.users[0] === user.email ? data.users[1] : data.users[0]}
        </div>
    );
};
