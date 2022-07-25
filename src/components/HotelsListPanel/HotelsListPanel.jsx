import HotelCard from '../HotelCard/HotelCard';
import './HotelsListPanel.css'
import {Link} from 'react-router-dom';

const HotelsListPanel = ({hotelsList}) => {
    
    return (
        <div className='hotelsListPanel'>
            {(hotelsList.length) ? hotelsList.map((item) => 
            <Link to={`/hotel/${item.id}`} key={item.id} >
                <HotelCard hotelData={item} />
            </Link>
            ) : "Searching ..."}
        </div>
    )
}

export default HotelsListPanel;