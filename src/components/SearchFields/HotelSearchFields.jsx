import { useEffect, useState } from 'react';
import { getHotelCities } from '../../firebase';
import {Link} from 'react-router-dom';
import './SearchFields.css';

const HotelSearchFields = ({searchValue, setSearchValue}) => {

    const [citiesList, setCitiesList] = useState([]);
    const [showCitiesOption, setShowCitiesOption] = useState(false);
    // const [hoverCityOptions, setHoverCityOptions] = useState(false);
    const [checkInError, setCheckInError] = useState(false);
    const [checkOutError, setCheckOutError] = useState(false);

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
                    <input type='text' name='cityName' placeholder='City Name' onChange={(e) => setSearchValue(prev => { return {...prev, cityName: e.target.value}})} value={searchValue.cityName}
                    onFocus={() => {setShowCitiesOption(true)}} 
                    onBlur={() => {
                        // setShowCitiesOption(false)
                        // if(!hoverCityOptions){ setShowCitiesOption(false) }
                         }} autoComplete="off" />
                    <div className='homeSearchBarField_row2_optionsDiv'>
                        {showCitiesOption && (citiesList.length > 0) ? 
                            <ul> 
                                {citiesList.map((cityName) => 
                                    <li key={cityName}
                                        // onMouseEnter={() => {setHoverCityOptions(true)}} 
                                        // onMouseLeave={() => {setHoverCityOptions(false)}} 
                                        onClick={() => {
                                            setSearchValue(prev => {return {...prev, cityName: cityName } })
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
                        <span className='label'>Check In
                        </span>
                        <input type='date' name='checkInDate' value={searchValue.checkIn} 
                        onClick={(e) => setCheckInError(false)}
                        onChange={(e) => {
                            if( new Date(e.target.value) >= new Date((new Date()).toISOString().split('T')[0])){
                                setSearchValue(prev => { return {...prev, checkIn: e.target.value} })
                            }
                            else{
                                setCheckInError(true);
                            }
                        }}/>
                                <span className='checkIn_error' style={{ display: (checkInError) ? 'inline' : 'none' }}>Please select a date that is today or other following day.</span>
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label htmlFor='checkOutDate'>
                        <span className='label'>Check Out</span>
                        <input type='date' name='checkOutDate' value={searchValue.checkOut} 
                        onClick={() => setCheckOutError(false)}
                        onChange={(e) => {
                            console.log();
                            if( new Date(e.target.value) > new Date(searchValue.checkIn)){
                                setSearchValue(prev => { return {...prev, checkOut: e.target.value} })
                            }
                            else{
                                setCheckOutError(true);
                            }
                        }}/>
                        <span className='checkOut_error' style={{ display: (checkOutError) ? 'inline' : 'none' }}>Please select a date that is tomorrow or other following day.</span>
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label htmlFor='noOfRooms'>
                        <span className='label'>Rooms</span>
                        <input type='number' name='noOfRooms' placeholder='No. of Rooms' value={searchValue.rooms} onChange={(e) => { 
                            if (e.target.value >= 1 && e.target.value < 10) {
                                setSearchValue(prev => { return {...prev, rooms : e.target.value } })} 
                            } }/>
                    </label>
                </div>
                
            </div>
        </div>
    );
}

export default HotelSearchFields;