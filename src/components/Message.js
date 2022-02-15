import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

export const Message = ({ data }) => {
    const [user] = useAuthState(auth);
    return (
        <div
            className={`w-fit rounded-3xl max-w-[80%] px-5 py-1 ${
                user.uid === data.user ? "bg-blue-300 ml-auto" : "bg-gray-300 mr-auto"
            }`}
        >
            <p>{data?.message}</p>
            {/* <p className='text-[0.5rem]'>{new Date(data?.timestamp?.toDate()).toLocaleString()}</p> */}
        </div>
    );
};
