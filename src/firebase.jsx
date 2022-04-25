// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCLSYw7kYxwRvV5ujpdOBrcq12cNIYQcj4",
    authDomain: "oab-e-commerce.firebaseapp.com",
    projectId: "oab-e-commerce",
    storageBucket: "oab-e-commerce.appspot.com",
    messagingSenderId: "388359084199",
    appId: "1:388359084199:web:97c5b5a4cb94ba53a0a382",
    measurementId: "G-9RD8SBZGSJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  //conexion a firebase
const analytics = getAnalytics(app);

const db = getFirestore(app);  //usando la conexion a firebase, accedemos a firestore que es donde almacenamos nuestros datos!
export default db;
