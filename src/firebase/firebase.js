// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore, collection, getDocs} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyB9debWYQj6lKTzl3EIgz0tXaf1rEXKLF4",
authDomain: "tiendacapricornio-3840f.firebaseapp.com",
databaseURL: "https://tiendacapricornio-3840f-default-rtdb.firebaseio.com",
projectId: "tiendacapricornio-3840f",
storageBucket: "tiendacapricornio-3840f.appspot.com",
messagingSenderId: "365687380749",
appId: "1:365687380749:web:3b890ed2b34e3bdef32e44",
measurementId: "G-DJ6VG9GR4F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export function TestDB(){
    console.log(db)
}

export function getProductos(){
    const productosCollectionRef = collection(db, "Productos");
    const docSnapshot = getDocs(productosCollectionRef)

    return docSnapshot;
}

export default db;