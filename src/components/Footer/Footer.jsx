import './Footer.css';
import {BsTwitter, BsFacebook} from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className='footer_socialLinks'>
                <BsTwitter />
                <BsFacebook />
            </div>
            <div className='footer_infoText'>
                <span>© 2022 BOOKMYTRIP PVT. LTD.</span>
                <span>Country India USA UAE</span>
            </div>
        </footer>
    )
}

export default Footer;