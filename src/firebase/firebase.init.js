// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJriQHHZUpZpAuQSNtJCBhswgScyPHSEo",
  authDomain: "fir-react-three.firebaseapp.com",
  projectId: "fir-react-three",
  storageBucket: "fir-react-three.firebasestorage.app",
  messagingSenderId: "1073743287961",
  appId: "1:1073743287961:web:a4479a1c1113b743784a08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)