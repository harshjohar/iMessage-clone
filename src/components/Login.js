import { signInWithPopup } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import React from "react";
import { auth, db, provider } from "../firebase";

export const Login = () => {
    const signIn = () => {
        signInWithPopup(auth, provider).then(({ user }) => {
            setDoc(
                doc(db, "users", user.uid),
                {
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    lastseen: serverTimestamp(),
                },
                { merge: true }
            );
        });
    };
    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="h-72 flex items-center p-10 rounded-lg bg-gray-300 flex-col justify-evenly">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IMessage_logo.svg/351px-IMessage_logo.svg.png?20180402204645" alt="logo" className="h-12 w-12" />
            <button onClick={signIn} className="bg-blue-300 p-3 px-10 rounded-lg">Sign in with google</button>

            </div>
        </div>
    );
};
