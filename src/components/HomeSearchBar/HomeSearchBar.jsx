import HotelSearchFields from '../SearchFields/HotelSearchFields';
import MenuItems from '../MenuItems/MenuItems';
import './HomeSearchBar.css'
import homeBg from '../../images/homeBackground.jpg'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveSearch } from '../../redux/hotesSearchRedux';
import { useDispatch } from 'react-redux';
import LoginButton from '../LoginButton/LoginButton';

const HomeSearchBar = ({setShowLogin}) => {

    const currDate = (new Date()).toISOString().split('T')[0];
    const dispatch = useDispatch();

    let nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 1);
    nextDate = nextDate.toISOString().split('T')[0];

    const [ searchValue, setSearchValue ] = useState({cityName: '', checkIn: currDate, checkOut: nextDate, rooms: 1});

    const navigate = useNavigate();

    return(
        <div className="homeSearchBar" style={{backgroundImage: "url("+homeBg+")"}}>
            <div className='homeSearchBar_login'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <ul className='homeSearchBar_loginList'>
                    {/* <li>Download the App</li>
                    <li>Introducing myBiz</li>
                    <li>My Trips</li> */}
                    {/* <li className='homeSearchBar_loginBtn' onClick={() => setShowLogin(true)}> */}
                    <li className='homeSearchBar_loginBtn'>
                        <LoginButton />
                    </li>
                </ul>
            </div>
            <div className='homeSearchBar_formDiv'>
                <div className='homeSearchBar_form'>
                    <HotelSearchFields searchValue={searchValue} setSearchValue={setSearchValue} />
                    {/* <Link to={'/hotels/' + searchValue.cityName.toLowerCase()}> */}
                        <button className='homeSearchBar_searchButton' 
                        onClick={() => {
                            if (searchValue.cityName){
                                dispatch( saveSearch(searchValue) )
                                navigate('/hotels/' + searchValue.cityName.toLowerCase())
                            }
                        }}>
                            Search
                        </button>
                    {/* </Link> */}
                </div>
                <div className='homeSearchBar_menuItemsdiv'>
                    <MenuItems />
                </div>
            </div>
        </div>
    )
}

export default HomeSearchBar;