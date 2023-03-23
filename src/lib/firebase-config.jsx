import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsx48YKNnRNwtkf9fx2nlAGm56iha-Q9o",
  authDomain: "enciclopedia-887b2.firebaseapp.com",
  projectId: "enciclopedia-887b2",
  storageBucket: "enciclopedia-887b2.appspot.com",
  messagingSenderId: "196389481506",
  appId: "1:196389481506:web:e47829975345d0ee3aae7b",
  measurementId: "G-CBEVGWJ15F"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);