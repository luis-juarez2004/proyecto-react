// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, collection, doc, getDoc, getDocs, getFirestore} from "firebase/firestore";
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
    console.log(analytics)
}

export async function getProductos(){
    const productosCollectionRef = collection(db, "Productos");
    const docSnapshot = await getDocs(productosCollectionRef)

    const dataProductos = docSnapshot.docs.map( item => {
        const Productos = {
            ...item.data(),
            id: item.id,
        }
    
        return Productos
    })

    return dataProductos;
}

export async function getProductosId(id){
    const refCollection = collection(db, "Productos");
    const docRef = doc(refCollection, id);
    const docSnapshot1 = await getDoc(docRef);
    const products = {
        ...docSnapshot1.data(),
        id: docSnapshot1.id,
    };
    return products;
}

export default db;