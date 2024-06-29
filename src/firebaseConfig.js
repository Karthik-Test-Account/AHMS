import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyABU8sVlgPCPHEKmT3nuxbgIeFPJEA_8bo",
  authDomain: "ahms-e2e55.firebaseapp.com",
  projectId: "ahms-e2e55",
  storageBucket: "ahms-e2e55.appspot.com",
  messagingSenderId: "603354199768",
  appId: "1:603354199768:web:27f9fa90e9f3b58188c9ad"
};

const app = initializeApp(firebaseConfig);

const db=getFirestore(app);//reference for cloud firestore service

const imageStore=getStorage(app);

export {db,imageStore};