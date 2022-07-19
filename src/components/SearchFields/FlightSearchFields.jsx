import './SearchFields.css';

const FlightSearchFields = ({type}) => {
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
                    <label for='fromCity' >
                        <span className='label'>From</span>
                        <input type='text' name='fromCity' placeholder='From City'/>
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='toCity'>
                        <span className='label'>To</span>
                        <input type="text" name='toCity' placeholder='To City' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='departureDate'>
                        <span className='label'>Departure</span>
                        <input type='date' name='departureDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='returnDate'>
                        <span className='label'>Return</span>
                        <input type='date' name='returnDate' />
                    </label>
                </div>
                <div className='homeSearchBarField_row2_inputDiv'>
                    <label for='noOfTravellers'>
                        <span className='label'>Travellers & Class</span>
                        <input type='number' for='noOfTravellers' placeholder='No. of Travellers'/>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default FlightSearchFields;