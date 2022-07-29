import firebaseConfig from '../firebaseConfig';
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp, createUser } from "./auth.js";

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, createUser };