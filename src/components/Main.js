import { doc } from 'firebase/firestore';
import React from 'react'
import { useSelector } from 'react-redux'
import { selectChatId } from '../features/chatSlice'
import { db } from '../firebase';
import {useDocument} from "react-firebase-hooks/firestore"
export const Main = () => {
    const chatId = useSelector(selectChatId);

    const chatRef = (chatId && doc(db, 'chats', chatId));
    const [chatData] = useDocument(chatRef);


  return (
    <div>
        <p>{chatData?.data().users[0]}</p>
        <p>{chatData?.data().users[1]}</p>
    </div>
  )
}
