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

    console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
        // console.log(doc.id);
        hotelsList.push({...doc.data(), id: doc.id});
        //Adding document id to the hotel data
    });

    return hotelsList;
}

async function getHotelCities(){
  const docRef = doc(db, "Hotels", "hotels_details");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data().cities;
  } else {
    console.log("No such document!");
  }
}

async function getHotelData(hotelId){
  const docRef = doc(db, "Hotels", hotelId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}

export {getHotelsByCity, getHotelCities, getHotelData};