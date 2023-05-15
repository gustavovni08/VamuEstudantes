import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyDaZfGEtZNV9Z8O7cU8aejv-GJ4HMaN5OQ",
    authDomain: "vamuestudantes.firebaseapp.com",
    projectId: "vamuestudantes",
    storageBucket: "vamuestudantes.appspot.com",
    messagingSenderId: "262702748509",
    appId: "1:262702748509:web:969136e0de59e6c3264eb4",
    measurementId: "G-M55CEL8GPN"
  };
  
  const app = initializeApp(firebaseConfig);

  const database = getFirestore(app)

  export default database