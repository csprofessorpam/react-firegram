// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import * as firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-R3vDZPmsVFLv6Quotv194WpXdPTern8",
  authDomain: "react-firegram-e708f.firebaseapp.com",
  projectId: "react-firegram-e708f",
  storageBucket: "react-firegram-e708f.appspot.com",
  messagingSenderId: "946905731894",
  appId: "1:946905731894:web:537a66ad69702713c7d997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = firebase.storage();
export const db = firebase.firestore();
