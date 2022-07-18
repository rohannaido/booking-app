import HomeSearchBarField from '../HomeSearchBarFields/HomeSearchBarFields';
import MenuItems from '../MenuItems/MenuItems';
import './HomeSearchBar.css'

const HomeSearchBar = () => {
    return(
        <div className="homeSearchBar">
            <div className='homeSearchBar_login'>
                <div className='logo'>
                    takeMyTrip
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
                    <HomeSearchBarField type={"flight"} />
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