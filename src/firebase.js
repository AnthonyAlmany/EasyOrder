// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app";
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDXWQbv_hRmtTrLW0OuFfleVOjcsFACMLM",
  authDomain: "inventory-main.firebaseapp.com",
  projectId: "inventory-main",
  storageBucket: "inventory-main.appspot.com",
  messagingSenderId: "206788606084",
  appId: "1:206788606084:web:20c911bc05d38fb819ead1",
  measurementId: "G-7HHD8H1VPJ"
});




const db = firebaseConfig.firestore();

export default db;

