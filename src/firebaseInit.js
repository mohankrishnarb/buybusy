// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIPtuINnoxldP8UXri9QYf1vtkBvO4gUk",
  authDomain: "buybusy-88f9b.firebaseapp.com",
  projectId: "buybusy-88f9b",
  storageBucket: "buybusy-88f9b.appspot.com",
  messagingSenderId: "556915039686",
  appId: "1:556915039686:web:0cb4c4b02162786e3da6c7",
  measurementId: "G-KJJK3QZ7HR"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
