import firebaseConfig from '../firebaseConfig';
import { initializeApp } from "firebase/app";
import { loginApp, signOutApp, createUser } from "./auth.js";
import { createHotelBooking } from './updateData';
import { getUserHotelBookings } from './fetchData';

const app = initializeApp(firebaseConfig);

export { loginApp, signOutApp, createUser, createHotelBooking, getUserHotelBookings };