import React from "react";
import { Sidebar } from "./components/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { Login } from "./components/Login";
import { auth } from "./firebase";
import { Main } from "./components/Main";
import { useSelector } from "react-redux";
import { selectChatId } from "./features/chatSlice";
import { LandingPage } from "./components/LandingPage";

function App() {
    const [user] = useAuthState(auth);
    const chatId = useSelector(selectChatId);
    if (!user) {
        return <Login />;
    }

    return (
        <div className="flex h-screen w-screen overflow-hidden">
            <div className="w-[25%] bg-gray-200">
                <Sidebar />
            </div>
            <div className="w-[80%] ">
                {chatId ? <Main /> : <LandingPage/>}
            </div>
        </div>
    );
}

export default App;
