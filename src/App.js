import React from "react";
import { Sidebar } from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "./components/Login";
import { auth } from "./firebase";
import { Main } from "./components/Main";
import { useSelector } from "react-redux";
import { selectChatId } from "./features/chatSlice";

function App() {
    const [session] = useAuthState(auth);
    const chatId = useSelector(selectChatId);
    if (!session) {
        return <Login />;
    }


    return (
        <div className="flex h-screen w-screen">
            <div className="w-[20%] bg-gray-200">
                <Sidebar />
            </div>
            {chatId && <div className="w-[80%] bg-red-200">
              <Main/>
            </div>}
        </div>
    );
}

export default App;
