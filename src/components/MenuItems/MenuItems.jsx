import './MenuItems.css'
import { RiFlightTakeoffFill, RiHotelFill, RiHome4Fill, RiTrainFill, RiBus2Fill, RiCarFill, RiMoneyDollarBoxFill } from "react-icons/ri";
import { GiRiver } from 'react-icons/gi'
// import { FaHiking } from 'react-icons/fa';
import {Link} from 'react-router-dom';

const MenuItems = ({type}) => {

    const menuStyling = () => {
        if (type === "col"){
            return 'column'
        }
        return ''

    }

    return(
        <ul className="menuList" style={{ flexDirection: menuStyling() }}>
            <Link to='/'>
                <li className='menuItem'>
                    <span className='menuList_icon'>
                        <RiHotelFill />
                    </span>
                    <span className='menuList_text'>
                        Hotels
                    </span>
                </li>
            </Link>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiFlightTakeoffFill />
                </span>
                <span className='menuList_text'>
                    Flights
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiHome4Fill />
                </span>
                <span className='menuList_text'>
                    Homestays
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <GiRiver />
                </span>
                <span className='menuList_text'>
                    Holiday Packages
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiTrainFill />
                </span>
                <span className='menuList_text'>
                    Trains
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiBus2Fill />
                </span>
                <span className='menuList_text'>
                    Buses
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiCarFill />
                </span>
                <span className='menuList_text'>
                    Cabs
                </span>
            </li>
            <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiMoneyDollarBoxFill />
                </span>
                <span className='menuList_text'>
                    Forex
                </span>
            </li>
            {/* <li className='menuItem'>
                <span className='menuList_icon'>
                    <RiHotelFill />
                </span>
                <span className='menuList_text'>
                    Charter Flights
                </span>
            </li> */}
            {/* <li className='menuItem'>
                <span className='menuList_icon'>
                    <FaHiking />
                </span>
                <span className='menuList_text'>
                    Activities
                </span>
            </li> */}
        </ul>
    )
}

export default MenuItems;