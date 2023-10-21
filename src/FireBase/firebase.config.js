// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwFwQ5FxvVLTf24Qehsj_NIo-85fiWr-Y",
  authDomain: "social-event-management-dcf23.firebaseapp.com",
  projectId: "social-event-management-dcf23",
  storageBucket: "social-event-management-dcf23.appspot.com",
  messagingSenderId: "174991734242",
  appId: "1:174991734242:web:0b81ed5646c9e4b7e6b5bb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;