import { 
    getFirestore, 
    collection,
    doc, 
    getDoc, 
    addDoc,
    updateDoc, 
    arrayUnion, 
    deleteField, 
    deleteDoc,
    serverTimestamp} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getCurrUserId } from './auth'

const db = getFirestore();

async function createHotelBooking(dispatch, hotelFormData){

    try{
        console.log("hotelFormData : ", hotelFormData);
        const userUid = getCurrUserId();
        console.log('userUid: ', userUid);
        const docRef = await addDoc(collection(db, "userData", userUid, "hotelBookings" ), {
            ...hotelFormData
        });
        console.log("ADDED BOOKING" ,docRef.id);
        // dispatch(addNoteState({...noteData, _id: docRef.id}))
        return docRef;
    }
    catch(error) {
        console.log(error);
        throw error;
    }
}

export { createHotelBooking };