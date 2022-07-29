import { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { getUserHotelBookings } from '../../firebase/fetchData';
import './Bookings.css'
import { useSelector } from 'react-redux';
import HotelBookingCard from '../../components/HotelBookingCard/HotelBookingCard';
import Footer from '../../components/Footer/Footer';

const Bookings = () => {

    const userId = useSelector(state => state.user.value.uid);
    const [bookingsArr, setBookingsArr] = useState([]);

    const loadBookings = async () => {
        const data = await getUserHotelBookings(userId);
        setBookingsArr(data);
    }

    useEffect(() => {
        loadBookings();
    },[]);

    return (
        <div className='bookings'>
            <NavBar type={"static"} />
            <div className='bookings_div'>
                <h2>My Bookings</h2>
                <div className='bookings_list'>
                    {bookingsArr.map(item => <HotelBookingCard bookingData={item} key={item.id} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Bookings;