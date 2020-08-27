import * as firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvfKI7M8CJGDHPOHvdoqBKnRWmb9gleJ8",
    authDomain: "ninja-smoothies-2b4ac.firebaseapp.com",
    databaseURL: "https://ninja-smoothies-2b4ac.firebaseio.com",
    projectId: "ninja-smoothies-2b4ac",
    storageBucket: "ninja-smoothies-2b4ac.appspot.com",
    messagingSenderId: "6312643915",
    appId: "1:6312643915:web:8ed99b423080f6741c6cce",
    measurementId: "G-SPZ2JBJTYW"
  }

  // Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

  //export firestore database
  export default firebaseApp.firestore()