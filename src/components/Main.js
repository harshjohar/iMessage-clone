import { doc } from "firebase/firestore";
import React from "react";
import { useSelector } from "react-redux";
import { selectChatId } from "../features/chatSlice";
import { auth, db } from "../firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { Input } from "./Input";
import { Chat } from "./Chat";
import { Topbar } from "./Topbar";
import { useAuthState } from "react-firebase-hooks/auth";

export const Main = () => {
    const chatId = useSelector(selectChatId);
    const [user] = useAuthState(auth);


    const chatRef = chatId && doc(db, "chats", chatId);
    const [chatData] = useDocument(chatRef);

    const data = chatData?.data();
    const name = data?.users[0] === user.email ? data?.users[1] : data?.users[0];

    return (
        <div className="w-full h-full bg-gray-100 relative">
            <Topbar name={name}/>
            <Chat chatRef={chatRef} user={user}/>
            <Input chatRef={chatRef} user={user}/>
        </div>
    );
};
