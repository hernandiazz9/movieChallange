// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQyZLBwyqDB_eOojtlJFRNFYV9ApKo1v4",
  authDomain: "movie-challange.firebaseapp.com",
  projectId: "movie-challange",
  storageBucket: "movie-challange.appspot.com",
  messagingSenderId: "725468165881",
  appId: "1:725468165881:web:c1e72b5af2d4f034d61428",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const storage = getStorage(firebase);

export { firebase, storage };
