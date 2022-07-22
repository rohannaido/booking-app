import './HotelPage.css'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHotelData } from '../../firebase';
import LoginPanel from '../../components/LoginPanel/LoginPanel';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

const HotelPage = () => {

    const location = useLocation();
    const hotelId = location.pathname.split("/")[2];
    // const hotelId = useLocation

    const [hotelData, setHotelData] = useState({});

    useEffect(() => {
        const getData = async () => {
            const data = await getHotelData(hotelId);
            setHotelData(data);
            console.log(data);
        }
        getData();
    },[])

    const [showLogin, setShowLogin] = useState(false);

    return (
        <div className='hotelPage'>
            {showLogin && <LoginPanel setShowLogin={setShowLogin} />}
            <NavBar type={"static"} setShowLogin={setShowLogin} />
            <div className='hotelPage_div'>
                <div className='hotelPage_imageDiv'>
                    <img src={hotelData.mainImage} alt={hotelData.name} />
                </div>
                <div className='hotelPage_contentDiv'>
                    <h1>
                        {hotelData.title}
                    </h1>
                    <p>
                        {hotelData.description}
                    </p>
                    <p>{hotelData.rating}</p>
                    <p>₹{hotelData.price}</p>
                    <button className='hotelPage_bookButton'>Book Now</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default HotelPage;