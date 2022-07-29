import { useEffect, useState } from 'react';
import { getHotelData } from '../../firebase';
import './HotelBookingCard.css';

const HotelBookingCard = ({bookingData}) => {
    const { id, hotelId, checkIn, checkOut, totalRent } = bookingData;

    const [hotelData, setHotelData] = useState({});

    const loadHotelData = async () => {
        const data = await getHotelData(hotelId);
        setHotelData(data);
    }

    useEffect(() => {
        loadHotelData();
    },[]);

    return (
        <div className='hotelBookingCard'>
            <div className='hotelBookingCard_details'>
                <div>
                    <h3>{hotelData.title}</h3>
                    <p><span>Check In-</span> {checkIn}</p>
                    <p><span>Check Out-</span> {checkOut}</p>
                    <p><span>Charges-</span> ₹{totalRent}</p>
                </div>
                <p><span>Booking Id-</span> {id}</p>
            </div>
            <div className='hotelBookingCard_imageDiv'>
                <img src={hotelData.mainImage} alt={hotelData.title + " image"} />
            </div>
        </div>
    )
}

export default HotelBookingCard;