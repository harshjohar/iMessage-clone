import { signOut } from "firebase/auth";
import { addDoc, collection, query, where } from "firebase/firestore";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import { auth, db } from "../firebase";
import { ChatButton } from "./ChatButton";

export const Sidebar = () => {
    const [user] = useAuthState(auth);

    const addChat = () => {
        const receiver = prompt("Enter the email of that person?");
        addDoc(collection(db, "chats"), {
            users: [user.email, receiver],
        }).then((id) => console.log(id));
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
        <div>
            <button className="bg-red-100" onClick={addChat}>
                Add a chat
            </button>
            <button onClick={logout} className="bg-green-200">
                Sign out
            </button>

            <div>
                {chats?.docs.map((doc) => (
                    <ChatButton id={doc.id} data={doc.data()} />
                ))}
            </div>
        </div>
    );
};
