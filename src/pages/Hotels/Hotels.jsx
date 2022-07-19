import HotelsListPanel from '../../components/HotelsListPanel/HotelsListPanel';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import './Hotels.css'
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import {getHotelsByCity} from '../../firebase.js';

const Hotels = () => {

    const [hotelsList, setHotelsList] = useState([]);

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
    
    useEffect(() => {
        console.log("TEST HOTEL LIST CALL")
        const getHotels = async (cityName) => {
            const data = await getHotelsByCity(cityName);
            setHotelsList(data);
        }
        getHotels(cityName);
    },[])
    
    

    return (
        <>
            <NavBar type="static" />
            <div className='hotelsPage'>

                <div className='hotelsPage_filtersPanel'>
                    <div>
                        
                        <h3>Sorting</h3>
                        <div className='hotelsPage_filterItem sort'>
                            <label htmlFor="priceSort">
                                <span className='hotelsPage_sortLabel'>Price:</span>
                                <select id="priceSort" name="priceSort" onChange={sortHotels}>
                                    <option value="default" selected disabled>Select option</option>
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

                    <div>
                        <h3>Filters</h3>
                        <div className='hotelsPage_filterItem'>
                            <span className='hotelsPage_filterHeading'>
                                Price (per night)
                            </span>
                            <div className='hotelsPage_filterOptions'>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='4.5' />
                                    ₹ 0 - ₹ 2000
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='4' />
                                    ₹ 2500 - ₹ 5000
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='3' />
                                    ₹ 5000 - ₹ 8000
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='3' />
                                    ₹ 8000 - ₹ 12000
                                </label>
                            </div>
                        </div>

                        <div className='hotelsPage_filterItem'>
                            <span className='hotelsPage_filterHeading'>
                                User Ratings
                            </span>
                            <div className='hotelsPage_filterOptions'>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='4.5' />
                                    4.5 & above (Excellent)
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='4' />
                                    4 & above (Very Good)
                                </label>
                                <label htmlFor="userRatingFilter">
                                    <input type="checkbox" name='userRatingFilter' value='3' />
                                    3 & above (Good)
                                </label>
                            </div>
                        </div>
                    </div>

                    <button className='hotelsPage_applyFiltersButton'>Apply Filters</button>
                    
                </div>
                <HotelsListPanel hotelsList={hotelsList} />
            </div>
            <Footer />
        </>
    )
}

export default Hotels;