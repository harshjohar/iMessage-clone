import { collection, orderBy, query } from "firebase/firestore";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { Message } from "./Message";

export const Chat = ({ chatRef, user }) => {
    const [chatMessages] = useCollection(
        query(collection(chatRef, "messages"), orderBy("timestamp", "asc"))
    );
    return (
        <div className="h-full w-full overflow-y-scroll scrollbar-hide pb-40 space-y-2 px-2">
            {chatMessages?.docs?.map((doc) => (
                <Message key={doc.id} data={doc.data()} />
            ))}
        </div>
    );
};
