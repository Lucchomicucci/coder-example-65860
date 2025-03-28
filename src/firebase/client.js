import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    // Aca va el objeto que nos da Firebase:
    apiKey: "AIzaSyAtK8QAyyXD8aeQ53cxKe7iG1pxXoIv5kI",
    authDomain: "coder68560.firebaseapp.com",
    projectId: "coder68560",
    storageBucket: "coder68560.firebasestorage.app",
    messagingSenderId: "128865386991",
    appId: "1:128865386991:web:d5720d7067787e0be1b61a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);