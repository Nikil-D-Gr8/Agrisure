

// import { initializeApp } from "firebase/app";
// import { GoogleAuthProvider, getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";


// const firebaseConfig = {
//   apiKey: "AIzaSyAY0nROYHSdLZGHDN3kA6qe8mp63UoR4zQ",
//   authDomain: "agrisure-nikilteam.firebaseapp.com",
//   databaseURL: "https://agrisure-nikilteam-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "agrisure-nikilteam",
//   storageBucket: "agrisure-nikilteam.appspot.com",
//   messagingSenderId: "918548859924",
//   appId: "1:918548859924:web:edc9f80ba494c9b7f96b01"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth() // for authentication
// const provider = new GoogleAuthProvider() //for provider

// const db = getFirestore(app)

// export {auth , provider,app, db }




// src/Config/firebaseConfig.js

import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAY0nROYHSdLZGHDN3kA6qe8mp63UoR4zQ",
  authDomain: "agrisure-nikilteam.firebaseapp.com",
  databaseURL: "https://agrisure-nikilteam-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "agrisure-nikilteam",
  storageBucket: "agrisure-nikilteam.appspot.com",
  messagingSenderId: "918548859924",
  appId: "1:918548859924:web:edc9f80ba494c9b7f96b01"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // Initialize auth with app instance
const provider = new GoogleAuthProvider(); // Initialize Google provider
const db = getFirestore(app); // Initialize Firestore with app instance
const database = getDatabase(app); // Initialize Realtime Database with app instance

export { auth, provider, app, db, database };



















