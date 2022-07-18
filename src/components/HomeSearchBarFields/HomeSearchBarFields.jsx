import './HomeSearchBarFields.css';

const HomeSearchBarField = () => {
    return(
        <div className='homeSearchBarField'>
            <div className='homeSearchBarField_row1'>
                <div className='homeSearchBarField_row1_radios'>
                    <label for='triptype'>
                        <input type="radio" name='triptype' />
                        Oneway
                    </label>
                    <label for='triptype'>
                        <input type="radio" name='triptype' />
                        Round Trip
                    </label>
                </div>
                <span>Book International and Domestic Flights</span>
            </div>

            <div className='homeSearchBarField_row2'>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='fromCity'>
                        <span>From</span>
                        <input type='text' name='fromCity' placeholder='Bengaluru'/>
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='toCity'>
                        To
                        <input type="text" name='toCity' placeholder='Delhi' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='departureDate'>
                        Departure
                        <input type='date' name='departureDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='returnDate'>
                        Return
                        <input type='date' name='returnDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='noOfTravellers'>
                        Travellers & Class
                        <input type='number' for='noOfTravellers' />
                    </label>
                </div>
            </div>
        </div>
    );
}

export default HomeSearchBarField;