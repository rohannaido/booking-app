import './HotelCard.css'

const HotelCard = ({hotelData}) => {
    // console.log(hotelData);
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
                <span className='hotelCard_price'>₹{hotelData.price}</span>
            </div>
        </div>
    )
}

export default HotelCard;