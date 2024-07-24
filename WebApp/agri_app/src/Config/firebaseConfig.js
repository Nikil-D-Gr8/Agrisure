// import { initializeApp } from "firebase/app";
// const firebaseConfig = {

// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);



import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAY0nROYHSdLZGHDN3kA6qe8mp63UoR4zQ",
  authDomain: "agrisure-nikilteam.firebaseapp.com",
  projectId: "agrisure-nikilteam",
  storageBucket: "agrisure-nikilteam.appspot.com",
  messagingSenderId: "918548859924",
  appId: "1:918548859924:web:edc9f80ba494c9b7f96b01"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }