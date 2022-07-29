import { 
    getFirestore, 
    collection, 
    doc, 
    getDoc,
    getDocs, 
    query,
    where 
} from "firebase/firestore"; 
import { getCurrUserId } from "./auth";

const db = getFirestore();

async function getUserHotelBookings(userId){

    try{
        const userUid = getCurrUserId() ? getCurrUserId() : userId;
        const querySnapshot = await getDocs(collection(db, 'userData' ,userUid, 'hotelBookings'));
        const bookings = [];
        querySnapshot.forEach((doc) => {
            bookings.push({...doc.data(), id: doc.id});
        });
        return bookings;
    }
    catch(error){
        console.log(error);
        throw error;
    }

}



export { getUserHotelBookings };