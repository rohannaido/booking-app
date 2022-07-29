import './LoginButton.css';
import { useNavigate } from 'react-router-dom';
import { signOutApp } from '../../firebase/service';
import { useSelector, useDispatch } from 'react-redux';
import { getAuth, updateProfile } from "firebase/auth";

const LoginButton = () => {

    const navigate = useNavigate();
    const displayName = useSelector(state => {
        return (state.user.value) ? state.user.value.displayName : '';
    });
    
    const dispatch = useDispatch();

    return (
        <div className='loginButton_div'>
            {!displayName ? 
            <button className="loginButton" onClick={() => navigate('/login')}>
                Login
            </button>
            :
            <div>
                <span className='loginButton_nameText' onClick={() => { navigate('/bookings') }}>
                    Hi,&nbsp;{displayName.split(' ')[0]}
                </span>
                <button className="loginButton_signOutBtn" onClick={() => { 
                    signOutApp(dispatch)
                    navigate('/')
                    }  }>
                    Sign Out
                </button>
            </div>}
        </div>
    )
}

export default LoginButton;