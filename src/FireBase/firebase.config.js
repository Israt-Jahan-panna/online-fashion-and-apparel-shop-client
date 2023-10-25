// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgBSyn7yPfj86UiZmZf1RgejKrWDx0NQ0",
  authDomain: "fashion-apparel-shop-client.firebaseapp.com",
  projectId: "fashion-apparel-shop-client",
  storageBucket: "fashion-apparel-shop-client.appspot.com",
  messagingSenderId: "934110634390",
  appId: "1:934110634390:web:ac0e36e0443ec0976ebdb7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;