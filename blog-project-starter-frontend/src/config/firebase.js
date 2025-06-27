import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD37Qmdi_UXgYcsPa_fSnRr3s8t8IeLzsU",
  authDomain: "blog-app-8c209.firebaseapp.com",
  projectId: "blog-app-8c209",
  storageBucket: "blog-app-8c209.firebasestorage.app",
  messagingSenderId: "836046144326",
  appId: "1:836046144326:web:c861a1e7deba01797b9b47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)


export default auth;