import MenuItems from '../MenuItems/MenuItems';
import './NavBar.css';
import logo from '../../images/logo-black.png'
import { useState, useEffect } from 'react';

const NavBar = ({type}) => {
    
    const [showNavBar, setShowNavBar] = useState(false);

    const scrollAction = () => {
      if(window.pageYOffset > 150){
        setShowNavBar(true);
      }
      else{
        setShowNavBar(false);
      }
    }
  
    
    useEffect(() => {
      
      window.addEventListener("scroll", scrollAction);
      
    },[])

    return (
        <nav className="nav" style={{transform: (type ==="fixed" || showNavBar) ? 'translateY(0%)' : 'translateY(-100%)'}}>
            <div className='nav_container'>
                <div className='logo'>
                    <img src={logo} alt="app logo" />
                </div>
                <MenuItems />
                <ul className="nav_loginList">
                    <li className='nav_loginItem'>Login</li>
                    <li className='nav_loginItem'>Country</li>
                    <li className='nav_loginItem'>Language</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;