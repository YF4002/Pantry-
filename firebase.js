// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHw0W8l10HSuUkMnpyoG-JxgRhDwddslo",
  authDomain: "pantry-management-7703b.firebaseapp.com",
  projectId: "pantry-management-7703b",
  storageBucket: "pantry-management-7703b.appspot.com",
  messagingSenderId: "403073849867",
  appId: "1:403073849867:web:c339cf43b77983e8d1850e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export {firestore}