// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDt0H-tclCtA0haqbyLFKDJrq1BdmP1C0",
  authDomain: "checkpris.firebaseapp.com",
  projectId: "checkpris",
  storageBucket: "checkpris.appspot.com",
  messagingSenderId: "141069978",
  appId: "1:141069978:web:fc759637ef58427908d923",
  measurementId: "G-GNBNMR70MQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage: FirebaseStorage = getStorage(app);

export { db, storage };