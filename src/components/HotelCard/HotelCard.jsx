import './HotelCard.css'

const HotelCard = ({hotelData}) => {
    return (
        <div className="hotelCard">
            <div className='hotelCard_imageDiv'>
                
            </div>
            <div className='hotelCard_contentDiv'>
                <h3>{hotelData.title}</h3>
                <p>{hotelData.description}</p>
                <span>{hotelData.rating}</span>
                <span>{hotelData.price}</span>
            </div>
        </div>
    )
}

export default HotelCard;