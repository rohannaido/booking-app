import HotelSearchFields from '../SearchFields/HotelSearchFields';
import MenuItems from '../MenuItems/MenuItems';
import './HomeSearchBar.css'
import homeBg from '../../images/homeBackground.jpg'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';
import { useState } from 'react';

const HomeSearchBar = ({setShowLogin}) => {

    const [ searchValue, setSearchValue ] = useState({cityName: ''});

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
                    <li className='homeSearchBar_loginBtn' onClick={() => setShowLogin(true)}>
                        Login
                    </li>
                </ul>
            </div>
            <div className='homeSearchBar_formDiv'>
                <div className='homeSearchBar_form'>
                    <HotelSearchFields searchValue={searchValue} setSearchValue={setSearchValue} />
                    <Link to={'/hotels/' + searchValue.cityName}>
                        <button className='homeSearchBar_searchButton'>
                            Search
                        </button>
                    </Link>
                </div>
                <div className='homeSearchBar_menuItemsdiv'>
                    <MenuItems />
                </div>
            </div>
        </div>
    )
}

export default HomeSearchBar;