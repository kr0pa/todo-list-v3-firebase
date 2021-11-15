import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB4UFClM4jFR1orXdSFJG6lSfYZDTe7Vjs",
  authDomain: "todo-app-59136.firebaseapp.com",
  projectId: "todo-app-59136",
  storageBucket: "todo-app-59136.appspot.com",
  messagingSenderId: "388281895657",
  appId: "1:388281895657:web:adc1d94f61181786e8fe78",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
