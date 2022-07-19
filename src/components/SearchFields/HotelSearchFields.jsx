import './SearchFields.css';

const HotelSearchFields = ({searchValue, setSearchValue}) => {

    const setCityName = (e) => {
        // console.log(e.target.value);
        setSearchValue(e.target.value);
    }

    return(
        <div className='homeSearchBarField'>
            <div className='homeSearchBarField_row1'>
                {/* <div className='homeSearchBarField_row1_radios'>
                    <label for='triptype'>
                        <input type="radio" name='triptype' />
                        Oneway
                    </label>
                    <label for='triptype'>
                        <input type="radio" name='triptype' />
                        Round Trip
                    </label>
                </div> */}
                <span>Book Domestic and International Property Online.</span>
            </div>

            <div className='homeSearchBarField_row2'>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='cityName' >
                        <span className='label'>City</span>
                        <input type='text' name='cityName' placeholder='City Name' onChange={setCityName}/>
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='checkInDate'>
                        <span className='label'>Check In</span>
                        <input type='date' name='departureDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='checkOutDate'>
                        <span className='label'>Check Out</span>
                        <input type='date' name='checkOutDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='noOfRooms'>
                        <span className='label'>Rooms</span>
                        <input type='number' for='noOfRooms' placeholder='No. of Rooms'/>
                    </label>
                </div>
                
            </div>
        </div>
    );
}

export default HotelSearchFields;