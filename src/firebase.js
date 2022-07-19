import { firebaseConfig } from "./firebase-config";

import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  doc, 
  getDoc,
  getDocs, 
  query,
  where 
} from "firebase/firestore"; 


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getHotelsByCity(cityName){
    const q = query(collection(db, "Hotels"), where("city", "==" , cityName));
  
    const querySnapshot = await getDocs(q);
    
    const hotelsList = [];

    querySnapshot.forEach((doc) => {
        hotelsList.push(doc.data());
        // console.log(doc.id, " => ", doc.data());
    });

    return hotelsList;
}
  
export {getHotelsByCity};