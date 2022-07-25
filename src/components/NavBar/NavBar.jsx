import MenuItems from '../MenuItems/MenuItems';
import './NavBar.css';
import logo from '../../images/logo-black.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {GiHamburgerMenu} from 'react-icons/gi'


const NavBar = (props) => {

  const {type, setShowLogin} = props;
  const [showNavBar, setShowNavBar] = useState(false);
  
    const scrollAction = () => {
      if(window.pageYOffset > 150){
        setShowNavBar(true);
      }
      else{
        setShowNavBar(false);
      }
    }
  
  // console.log(props);
    
    useEffect(() => {
      window.addEventListener("scroll", scrollAction);
    },[])

    const getNavBarStyle = (type) => {
      if(type === "fixed"){
        return {
          transform: 'translateY(0%)',
          position: "fixed",
        }
      }
      else if(type === "static"){
        return {
          transform: 'translateY(0%)',
          position: "relative",
        }
      }
      else if(showNavBar){
        return {
          transform: 'translateY(0%)',
          position: "fixed",
        }
      }
    }

    const [showResNav, setShowResNav] = useState(false);    

    return (
        <nav className="nav" style={getNavBarStyle(type)}>
            <div className='nav_container'>
              <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt="app logo" />
                </div>
              </Link>
              <div className='nav_menuItems'>
                <MenuItems />
              </div>
              <ul className="nav_loginList">
                  <li className='nav_loginItem' onClick={() => { setShowLogin(true) }}>
                    Login
                  </li>
              </ul>
              <span className='nav_navOpener' onClick={() => setShowResNav(!showResNav)}>
                <GiHamburgerMenu />
              </span>
              <div className='nav_responsiveNav' style={{ display: showResNav ? 'flex': 'none' }}>
                <MenuItems type='col' />
                <div className='nav_resLogin' onClick={() => { setShowLogin(true) }}>
                    Login
                </div>
              </div>
            </div>
        </nav>
    )
}

export default NavBar;