import MenuItems from '../MenuItems/MenuItems';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="nav">
            <div>
                takeMyTrip
            </div>
            <MenuItems />
            <ul className="nav_loginList">
                <li className='nav_loginItem'>Login</li>
                <li className='nav_loginItem'>Country</li>
                <li className='nav_loginItem'>Language</li>
            </ul>
        </nav>
    )
}

export default NavBar;