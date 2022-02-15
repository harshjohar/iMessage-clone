import { signOut } from "firebase/auth";
import { addDoc, collection, query, where } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { ChatButton } from "./ChatButton";
import { BsPencilSquare, BsSearch } from "react-icons/bs";
import { ImExit } from "react-icons/im";
export const Sidebar = () => {
    const [user] = useAuthState(auth);

    const addChat = () => {
        const receiver = prompt("Enter the email of that person?");
        addDoc(collection(db, "chats"), {
            users: [user.email, receiver],
        }).then(() => {});
    };
    const logout = () => {
        signOut(auth);
    };

    const [chats] = useCollection(
        query(
            collection(db, "chats"),
            where("users", "array-contains", user.email)
        )
    );
    return (
        <div className="w-full h-full">
            <div className="w-full h-12 bg-gray-400 flex items-center justify-between px-4">
                <div className="flex items-center space-x-3">
                    <BsSearch />
                    <input
                        type="text"
                        placeholder="Search"
                        className="hidden lg:inline-flex bg-transparent placeholder:text-gray-900 outline-none"
                    />
                </div>
                <BsPencilSquare onClick={addChat} className="cursor-pointer" />
                <ImExit onClick={logout} className="cursor-pointer" />
            </div>

            <div className="h-full overflow-y-scroll scrollbar-hide">
                {chats?.docs.map((doc) => (
                    <ChatButton id={doc.id} data={doc.data()} key={doc.id} />
                ))}
            </div>
        </div>
    );
};
