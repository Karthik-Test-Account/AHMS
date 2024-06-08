import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyABU8sVlgPCPHEKmT3nuxbgIeFPJEA_8bo",
  authDomain: "ahms-e2e55.firebaseapp.com",
  projectId: "ahms-e2e55",
  storageBucket: "ahms-e2e55.appspot.com",
  messagingSenderId: "603354199768",
  appId: "1:603354199768:web:27f9fa90e9f3b58188c9ad"
};

export const app = initializeApp(firebaseConfig);