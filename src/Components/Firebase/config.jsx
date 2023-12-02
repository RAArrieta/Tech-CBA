import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-ht1keaM1lz7F8vxdLKh_M4uVAJSc6R4",
  authDomain: "tech-cba.firebaseapp.com",
  projectId: "tech-cba",
  storageBucket: "tech-cba.appspot.com",
  messagingSenderId: "31456355108",
  appId: "1:31456355108:web:f0033e134d040517c2c9b1",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
