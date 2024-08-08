// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ff158.firebaseapp.com",
  projectId: "mern-estate-ff158",
  storageBucket: "mern-estate-ff158.appspot.com",
  messagingSenderId: "394657420929",
  appId: "1:394657420929:web:5134ee3de1081f31a49f80",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
