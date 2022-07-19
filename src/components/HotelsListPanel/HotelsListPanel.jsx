import HotelCard from '../HotelCard/HotelCard';
import './HotelsListPanel.css'
const HotelsListPanel = ({hotelsList}) => {
    
    return (
        <div className='hotelsListPanel'>
            {(hotelsList.length) ? hotelsList.map((item) => <HotelCard hotelData={item} />) : "No Hotels Found"}
        </div>
    )
}

export default HotelsListPanel;