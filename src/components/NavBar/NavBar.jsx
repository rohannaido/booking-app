import MenuItems from '../MenuItems/MenuItems';
import './NavBar.css';
import logo from '../../images/logo-black.png'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  
  console.log(props);
    
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
          position: "static",
        }
      }
      else if(showNavBar){
        return {
          transform: 'translateY(0%)',
          position: "fixed",
        }
      }
    }

    

    return (
        <nav className="nav" style={getNavBarStyle(type)}>
            <div className='nav_container'>
              <Link to='/'>
                <div className='logo'>
                    <img src={logo} alt="app logo" />
                </div>
              </Link>
                <MenuItems />
                <ul className="nav_loginList">
                    <li className='nav_loginItem' onClick={() => { setShowLogin(true) }}>
                      Login
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;