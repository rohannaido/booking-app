import HotelSearchFields from '../SearchFields/HotelSearchFields';
import MenuItems from '../MenuItems/MenuItems';
import './HomeSearchBar.css'
import homeBg from '../../images/homeBackground.jpg'
import logo from '../../images/logo.png'

const HomeSearchBar = () => {
    return(
        <div className="homeSearchBar" style={{backgroundImage: "url("+homeBg+")"}}>
            <div className='homeSearchBar_login'>
                <div className='logo'>
                    <img src={logo} />
                </div>
                <ul className='homeSearchBar_loginList'>
                    <li>Download the App</li>
                    <li>Introducing myBiz</li>
                    <li>My Trips</li>
                    <li>Login create Account</li>
                </ul>
            </div>
            <div className='homeSearchBar_formDiv'>
                <div className='homeSearchBar_form'>
                    <HotelSearchFields />
                    <button className='homeSearchBar_searchButton'>
                        Search
                    </button>
                </div>
                <div className='homeSearchBar_menuItemsdiv'>
                    <MenuItems />
                </div>
            </div>
        </div>
    )
}

export default HomeSearchBar;