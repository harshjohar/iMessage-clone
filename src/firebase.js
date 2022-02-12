import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyABQK-8ylcUlHqPLUQGhCixECddBRhSYOw",
    authDomain: "imessage-harsh.firebaseapp.com",
    projectId: "imessage-harsh",
    storageBucket: "imessage-harsh.appspot.com",
    messagingSenderId: "73371755675",
    appId: "1:73371755675:web:eb0d52a33e460e5140523e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, db, provider, storage, app };
