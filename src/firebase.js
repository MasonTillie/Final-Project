import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: 'AIzaSyBXjvi_vVPCuzF6ogNr-JMslptstzPNATE',
  authDomain: "nba-reference.firebaseapp.com",
  projectId: "nba-reference",
  storageBucket: "nba-reference.appspot.com",
  messagingSenderId: "771287768241",
  appId: "1:771287768241:web:e6961d62bdfa2762b79690"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 
