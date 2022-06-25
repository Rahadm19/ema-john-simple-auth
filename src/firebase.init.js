// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRs4t5hIswtErlyRmiFRqgAhhFEyKo3J4",
  authDomain: "ema-john-simple-313ea.firebaseapp.com",
  projectId: "ema-john-simple-313ea",
  storageBucket: "ema-john-simple-313ea.appspot.com",
  messagingSenderId: "428125014813",
  appId: "1:428125014813:web:0631d6a5613ec310862ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;