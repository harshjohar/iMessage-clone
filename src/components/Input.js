import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";

export const Input = ({chatRef, user}) => {
    const [message, setMessage] = useState("");
    const sendMessage = (e) => {
        e.preventDefault();
        if(message.length===0) {
            return;
        }

        addDoc(collection(chatRef, 'messages'), {
            message: message, 
            timestamp: serverTimestamp(),
            user: user.uid 
        }).then(()=>{}).catch((err)=>alert("An error occurred: "+err.message))

        setMessage("");
    };
    return (
        <div className="absolute bottom-0 mx-auto w-full flex justify-center bg-gray-200 py-6">
            <form className="w-full flex justify-center" onSubmit={sendMessage}>
                <input
                    type="text"
                    className="w-[90%] rounded-full px-2 outline-none border-none"
                    placeholder="iMessage"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button type="submit" hidden>
                    Submit
                </button>
            </form>
        </div>
    );
};
