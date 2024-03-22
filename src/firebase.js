import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAEeJ061SU-S0moQfbCDhmDaj6c9iw0W74",
  authDomain: "tutorial-8b205.firebaseapp.com",
  databaseURL: "https://tutorial-8b205-default-rtdb.firebaseio.com",
  projectId: "tutorial-8b205",
  storageBucket: "tutorial-8b205.appspot.com",
  messagingSenderId: "706605247577",
  appId: "1:706605247577:web:3213b9ebb248d6d094d548"
};


const setupFirebase=()=>{
  return initializeApp(firebaseConfig);
}

export default setupFirebase;