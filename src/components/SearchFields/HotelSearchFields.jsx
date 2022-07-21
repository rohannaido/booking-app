import { useEffect, useState } from 'react';
import { getHotelCities } from '../../firebase';
import {Link} from 'react-router-dom';
import './SearchFields.css';

const HotelSearchFields = ({searchValue, setSearchValue}) => {

    const [citySearch, setCitySearch] = useState('');
    const [citiesList, setCitiesList] = useState([]);
    const [showCitiesOption, setShowCitiesOption] = useState(false);
    const [hoverCityOptions, setHoverCityOptions] = useState(false);

    const setCityName = (e) => {
        setCitySearch(e.target.value);
        setSearchValue({cityName: e.target.value});
    }

    getHotelCities();

    useEffect(() => {
        const searchBarCities = async () => {
            const arr = await getHotelCities();
            console.log(arr);
            setCitiesList(arr);
        }
        searchBarCities();
    },[])

    return(
        <div className='homeSearchBarField'>
            <div className='homeSearchBarField_row1'>
                <span>Book Domestic and International Property Online.</span>
            </div>

            <div className='homeSearchBarField_row2'>
                <div className='homeSearchBarField_row2_inputDiv'>

                    <label htmlFor='cityName' >
                        <span className='label'>City</span>
                        <input type='text' name='cityName' placeholder='City Name' onChange={setCityName} value={citySearch}
                        onFocus={() => {setShowCitiesOption(true)}} 
                        onBlur={() => {
                            if(!hoverCityOptions){ setShowCitiesOption(false) } }} />
                        <div className='homeSearchBarField_row2_optionsDiv'>
                            {showCitiesOption && (citiesList.length > 0) ? 
                                <ul> 
                                    {citiesList.map((cityName) => 
                                        <li key={cityName}
                                            onMouseEnter={() => {setHoverCityOptions(true)}} 
                                            // onMouseLeave={() => {setHoverCityOptions(false)}} 
                                            onClick={() => {
                                                setCitySearch(cityName)
                                                setSearchValue({cityName: cityName})
                                                setShowCitiesOption(false)
                                                }}>
                                            {cityName}
                                        </li>
                                    )
                                }
                                </ul>
                                : <></> }
                        </div>
                    </label>

                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label htmlFor='checkInDate'>
                        <span className='label'>Check In</span>
                        <input type='date' name='departureDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label htmlFor='checkOutDate'>
                        <span className='label'>Check Out</span>
                        <input type='date' name='checkOutDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label htmlFor='noOfRooms'>
                        <span className='label'>Rooms</span>
                        <input type='number' name='noOfRooms' placeholder='No. of Rooms'/>
                    </label>
                </div>
                
            </div>
        </div>
    );
}

export default HotelSearchFields;