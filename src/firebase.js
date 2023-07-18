import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkpsvGpuJEtcbzmPX6tzj8iEcjT5_mYSM",
  authDomain: "cosmoskin-b692f.firebaseapp.com",
  projectId: "cosmoskin-b692f",
  storageBucket: "cosmoskin-b692f.appspot.com",
  messagingSenderId: "75854836260",
  appId: "1:75854836260:web:0f64c98f4758c6eda65eb1"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
