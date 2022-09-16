// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDEjmN_tnxs8hBVKcvnfTR3kQMaHiityzM",
  authDomain: "firechat-4cbd8.firebaseapp.com",
  projectId: "firechat-4cbd8",
  storageBucket: "firechat-4cbd8.appspot.com",
  messagingSenderId: "490143435177",
  appId: "1:490143435177:web:14f2526b28edd2bb355cb8",
  measurementId: "G-CLR5X28R6E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)