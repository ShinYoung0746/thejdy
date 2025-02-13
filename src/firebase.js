// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9C-KNiYdDq2DYTWBk5va_smoftG8n7Zw",
  authDomain: "company-introduction-7c5c9.firebaseapp.com",
  projectId: "company-introduction-7c5c9",
  storageBucket: "company-introduction-7c5c9.firebasestorage.app",
  messagingSenderId: "955009082000",
  appId: "1:955009082000:web:6970d74de6f7bb17d0ee15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, serverTimestamp };