// import * as firebase from "firebase";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
var firebaseConfig = {
  apiKey: "AIzaSyAad_8lgPUFPGm_jW6i1IBABuYN51x5iBw",
  authDomain: "react-slack-clone-43b26.firebaseapp.com",
  databaseURL: "https://react-slack-clone-43b26.firebaseio.com",
  projectId: "react-slack-clone-43b26",
  storageBucket: "react-slack-clone-43b26.appspot.com",
  messagingSenderId: "129201081270",
  appId: "1:129201081270:web:04a93bc68228933dc44f17",
  measurementId: "G-VPDMR5PB3M",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
