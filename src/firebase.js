import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDT5sfqvvhFdjn7Vf6-MS-WGnESEOH8wjs",
    authDomain: "twitter-clone-d3210.firebaseapp.com",
    projectId: "twitter-clone-d3210",
    storageBucket: "twitter-clone-d3210.appspot.com",
    messagingSenderId: "552412781632",
    appId: "1:552412781632:web:2d33b65909365601fe13a5",
    measurementId: "G-CNNXYNY5BT"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
export default db;