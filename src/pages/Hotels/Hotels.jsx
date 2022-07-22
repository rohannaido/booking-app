import HotelsListPanel from '../../components/HotelsListPanel/HotelsListPanel';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Hotels.css'
import { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {getHotelsByCity} from '../../firebase.js';
import LoginPanel from '../../components/LoginPanel/LoginPanel';

const Hotels = () => {

    const [hotelsList, setHotelsList] = useState([]);
    const [hotelFilter, setHotelFilter] = useState({
        priceFilter: '0-100000',
        userRatingFilter: '0',
    })
    const [priceFilterRadio, setPriceFilterRadio] = useState('');
    const [ratingFilterRadio, setRatingFilterRadio] = useState('');

    const location = useLocation();
    const cityName = location.pathname.split("/")[2];

    const sortHotels = (e) => {
        
        if(e.target.value === "htol"){
            setHotelsList(prev => { return [...prev.sort((a, b) => b.price - a.price )] });
        }
        else if(e.target.value === "ltoh"){
            setHotelsList(prev => { return [...prev.sort((a, b) => a.price - b.price )] });
        }

    }

    const addFilterHotels = (e) => {
        const filterName = e.target.name;
        const filterValue = e.target.value;
        
        setHotelFilter(prev => { return {...prev , [filterName]: filterValue} });
    }

    const filterHotels = () => {
        const lowerPrice = hotelFilter.priceFilter.split('-')[0];
        const higherPrice = hotelFilter.priceFilter.split('-')[1];

        return [...hotelsList.filter((hotel) => (hotel.price >= lowerPrice && hotel.price <= higherPrice) && (hotel.rating >= hotelFilter.userRatingFilter) )]
    }
    
    const clearFilter = () => {
        setPriceFilterRadio('');
        setRatingFilterRadio('');
        setHotelFilter({priceFilter: '0-100000', userRatingFilter: '0'});
    }
    
    useEffect(() => {
        const getHotels = async (cityName) => {
            const data = await getHotelsByCity(cityName);
            setHotelsList(data);
            console.log("DB CALLS");
        }
        getHotels(cityName);
    },[])

    const [showLogin, setShowLogin] = useState(false)
    
    
    return (
        <>
            {showLogin && <LoginPanel setShowLogin={setShowLogin} />}
            <NavBar type={"static"} setShowLogin={setShowLogin} />
            <div className='hotelsPage'>

                <div className='hotelsPage_filtersPanel'>
                    <div>
                        
                        <h3>Sort</h3>
                        <div className='hotelsPage_filterItem sort'>
                            <label htmlFor="priceSort">
                                <span className='hotelsPage_sortLabel'>Price:</span>
                                <select id="priceSort" name="priceSort" onChange={sortHotels}>
                                    <option value="default" defaultValue>Select option</option>
                                    <option value="ltoh">Low to High</option>
                                    <option value="htol">High to Low</option>
                                </select>
                            </label>
                        </div>

                        {/* <div className='hotelsPage_filterItem sort'>
                            <label htmlFor="ratingSort">
                                <span className='hotelsPage_sortLabel'>Ratings:</span>
                                <select id="ratingSort" name="ratingSort">
                                    <option value="default" selected disabled>Select option</option>
                                    <option value="htol">High to Low</option>
                                    <option value="ltoh">Low to High</option>
                                </select>
                            </label>
                        </div> */}
                    </div>

                    <form onChange={addFilterHotels}>
                        <h3>Filters</h3>
                        <div className='hotelsPage_filterItem'>
                            <span className='hotelsPage_filterHeading'>
                                Price (per night)
                            </span>
                            <div className='hotelsPage_filterOptions'>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='priceFilter' value='0-5000' 
                                    checked={priceFilterRadio === '0-5000'} 
                                    onChange={() => setPriceFilterRadio('0-5000') } />
                                    ₹ 0 - ₹ 5000
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='priceFilter' value='5000-10000' 
                                    checked={priceFilterRadio === '5000-10000'} 
                                    onChange={() => setPriceFilterRadio('5000-10000') } />
                                    ₹ 5000 - ₹ 10000
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='priceFilter' value='10000-20000' 
                                    checked={priceFilterRadio === '10000-20000'} 
                                    onChange={() => setPriceFilterRadio('10000-20000') } />
                                    ₹ 10000 - ₹ 20000
                                </label>
                            </div>
                        </div>

                        <div className='hotelsPage_filterItem'>
                            <span className='hotelsPage_filterHeading'>
                                User Ratings
                            </span>
                            <div className='hotelsPage_filterOptions'>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='userRatingFilter' value='4.5'
                                    checked={ratingFilterRadio === '4.5'}
                                    onChange={() => setRatingFilterRadio('4.5')} />
                                    4.5 & above (Excellent)
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='userRatingFilter' value='4' 
                                    checked={ratingFilterRadio === '4'}
                                    onChange={() => setRatingFilterRadio('4')} />
                                    4 & above (Very Good)
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="radio" name='userRatingFilter' value='3' 
                                    checked={ratingFilterRadio === '3'}
                                    onChange={() => setRatingFilterRadio('3')} />
                                    3 & above (Good)
                                </label>
                            </div>
                        </div>
                    </form>

                    <button className='hotelsPage_clearFiltersButton' type='button' onClick={clearFilter}>
                        Clear Filters
                    </button>
                    
                </div>
                <HotelsListPanel hotelsList={filterHotels()} />
            </div>
            <Footer />
        </>
    )
}

export default Hotels;