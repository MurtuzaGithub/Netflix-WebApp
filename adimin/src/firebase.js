//import React from "react";
//import firebase from "firebase";
//import firebase from "firebase/compat/app";
//import "firebase/compat/auth";
//import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDKHb5J1-BvAsVEm_uok3xSDXOMY47_Ns0",
    authDomain: "netflix-3bcfd.firebaseapp.com",
    projectId: "netflix-3bcfd",
    storageBucket: "netflix-3bcfd.appspot.com",
    messagingSenderId: "69458993907",
    appId: "1:69458993907:web:7f948560fa034032e38d86",
    measurementId: "G-16XZER4CD3"
  };
  


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;