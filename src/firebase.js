import { initializeApp } from "firebase/app";

const firebaseConfig = {
  //
};


const setupFirebase=()=>{
  return initializeApp(firebaseConfig);
}

export default setupFirebase;
