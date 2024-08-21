import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
 apiKey: "AIzaSyAFKqLxm1IyMAz3cN23OAVpAAyHRGcah0Y",
 authDomain: "inventory-management-app-8f2db.firebaseapp.com",
 projectId: "inventory-management-app-8f2db",
 storageBucket: "inventory-management-app-8f2db.appspot.com",
 messagingSenderId: "110116007415",
 appId:"1:110116007415:web:71021298647066a72092f2"
 };
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };