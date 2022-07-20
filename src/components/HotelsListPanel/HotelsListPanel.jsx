import HotelCard from '../HotelCard/HotelCard';
import './HotelsListPanel.css'
import {Link} from 'react-router-dom';

const HotelsListPanel = ({hotelsList}) => {
    
    return (
        <div className='hotelsListPanel'>
            {(hotelsList.length) ? hotelsList.map((item) => 
            <Link to={`/hotel/${item.id}`}>
                <HotelCard hotelData={item} />
            </Link>
            ) : "No Hotels Found"}
        </div>
    )
}

export default HotelsListPanel;