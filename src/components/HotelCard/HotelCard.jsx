import './HotelCard.css'
import { useSelector } from 'react-redux/es/exports'
import { calculateTotalRent } from '../../costCalculations'

const HotelCard = ({hotelData}) => {
    
    const searchDetails = useSelector(state => state.hotels.value);
    // const calculateTotalRent = (searchDetails, hotelData) => {
    //     const noOfDays = Math.floor((new Date(searchDetails.checkOut) - new Date(searchDetails.checkIn))/86400000);
    //     const rooms = searchDetails.rooms;
    //     return hotelData.price * noOfDays * rooms;
    // }
    
    return (
        <div className="hotelCard">
            <div className='hotelCard_imageDiv'>
                <img src={hotelData.mainImage} alt={hotelData.title} />
            </div>
            <div className='hotelCard_contentDiv'>
                <h3 className='hotelCard_title'>{hotelData.title}</h3>
                <p className='hotelCard_description'>{hotelData.description}</p>
                <span className='hotelCard_ratingContainer'>
                    <span className='hotelCard_ratingText'>Ratings</span>
                    <span className='hotelCard_ratings'>
                        {hotelData.rating}
                    </span>
                </span>
                <span className='hotelCard_totalPrice'>Total Rent : ₹{calculateTotalRent(searchDetails, hotelData)}</span>
                <span className='hotelCard_roomPrice'>Charge- ₹{hotelData.price} per room per night</span>
            </div>
        </div>
    )
}

export default HotelCard;