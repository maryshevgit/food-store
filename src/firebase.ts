import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD54kkG7PV8Pg2JInnRQztCDb_xW1kliK0",
  authDomain: "food-store-af9ee.firebaseapp.com",
  projectId: "food-store-af9ee",
  storageBucket: "food-store-af9ee.appspot.com",
  messagingSenderId: "629445607436",
  appId: "1:629445607436:web:f9b1887202cb6b798a6e29"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
