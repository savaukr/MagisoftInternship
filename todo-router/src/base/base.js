import * as firebase from "firebse/app";
import "firebase/auth";
let firebaseConfig = {
    apiKey: "AIzaSyDG-XuwwBvBHasaK0UQ6R_OCE8XdvkdDsk",
    authDomain: "todorouter-3fbfe.firebaseapp.com",
    databaseURL: "https://todorouter-3fbfe.firebaseio.com",
    projectId: "todorouter-3fbfe",
    storageBucket: "todorouter-3fbfe.appspot.com",
    messagingSenderId: "482541422662",
    appId: "1:482541422662:web:ee56c9be16637dea1d2247"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;