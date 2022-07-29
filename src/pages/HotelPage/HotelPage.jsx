import './HotelPage.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHotelData } from '../../firebase';
import LoginPanel from '../../components/LoginPanel/LoginPanel';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import { useSelector } from 'react-redux/es/exports'
import { calculateTotalRent } from '../../costCalculations';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';

const HotelPage = () => {

    const location = useLocation();
    const hotelId = location.pathname.split("/")[2];
    const searchDetails = useSelector(state => state.hotels.value);
    
    const [imagesArr, setImagesArr] = useState([]);

    const getHotelImageUrls = async () => {
        setImagesArr([]);
        const storage = getStorage();
        const hotelRef = ref(storage, `hotels/${hotelId}`);    
        const res = await listAll(hotelRef);
        for(let i = 0; i < res.items.length; i++){
            const url = await getDownloadURL(res.items[i]);
            setImagesArr(prev => [...prev , url]);
        }
    }
    
    const [hotelData, setHotelData] = useState({});
    const [showImageSlider, setShowImageSlider] = useState(false);

    useEffect(() => {
        getHotelImageUrls();
        const getData = async () => {
            const data = await getHotelData(hotelId);
            setHotelData(data);
            // console.log(data);
        }
        getData();
    },[])

    const [showLogin, setShowLogin] = useState(false);
    // console.log(hotelData.images);
    return (
        <div className='hotelPage'>
            {showLogin && <LoginPanel setShowLogin={setShowLogin} />}
            <NavBar type={"static"} setShowLogin={setShowLogin} />
            <div className='hotelPage_div'>
                <div className='hotelPage_imageDiv' onClick={() => setShowImageSlider(true)}>
                    <img src={hotelData.mainImage} alt={hotelData.name} />
                    <span>Click to view images</span>
                </div>
                <div className='hotelPage_contentDiv'>
                    <h1>
                        {hotelData.title}
                    </h1>
                    <p>
                        {hotelData.description}
                    </p>
                    <p className='hotelPage_ratings'>Ratings {hotelData.rating}</p>
                    <p className='hotelPage_totalPrice'>₹{calculateTotalRent(searchDetails, hotelData)} /-</p>
                    <p className='hotelPage_rentPrice'>₹{hotelData.price} per room per night</p>
                    <button className='hotelPage_bookButton'>Book Now</button>
                </div>
                {showImageSlider && imagesArr.length && <ImageSlider images={imagesArr} setShowImageSlider={setShowImageSlider} />}
            </div>
            <Footer />
        </div>
    )
}

export default HotelPage;