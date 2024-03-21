import { initializeApp } from "firebase/app";

const firebaseConfig = {
  // add here
};


const setupFirebase=()=>{
  return initializeApp(firebaseConfig);
}

export default setupFirebase;
