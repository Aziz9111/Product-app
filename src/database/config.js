import firebase from 'firebase/app';

require("firebase/database");


const firebaseConfig = {
  apiKey: "AIzaSyDfJM78xkJBN-pCmDUSCOwHdVPby7sID4I",
  authDomain: "photowall-38447.firebaseapp.com",
  databaseURL: "https://photowall-38447-default-rtdb.firebaseio.com",
  projectId: "photowall-38447",
  storageBucket: "photowall-38447.appspot.com",
  messagingSenderId: "330729302636",
  appId: "1:330729302636:web:d1b86b7550444e5ab1c649",
  measurementId: "G-WKR5W20E7B"
};

// Initialize Firebase
/* const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); */

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();

  export {database};