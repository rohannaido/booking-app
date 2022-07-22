import './LoginPanel.css'
import {loginToApp} from '../../firebase';
import { useState } from 'react';

const LoginPanel = ({setShowLogin}) => {

    const [emailValue, setEmailValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [userValue, setUserValue] = useState({});

    const [wrongEmail, setWrongEmail] = useState(false);
    const [wrongPassword, setWrongPassoword] = useState(false);

    const resetErrorText = () => {
        setWrongPassoword(false);
        setWrongEmail(false);
    }

    const checkLoginError = (error) => {
        if(error === 'auth/user-not-found'){
            setWrongEmail(true)
        }
        else if(error === 'auth/wrong-password'){
            setWrongPassoword(true)
        }
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try{
            const user = await loginToApp(emailValue, passwordValue);
            setUserValue(user);
            setShowLogin(false);
            console.log(user);
        }
        catch(error){
            console.log(error);
            checkLoginError(error);
        }
    }

    return (
        <div className="loginPanel">
            <div className='loginPanel_div'>
                <h1>Login</h1>
                <form className='loginPanel_form'>
                    <label htmlFor="email">Enter your email:
                        <input name='email' type="email" value={emailValue} onChange={(e) => {
                            resetErrorText();
                            setEmailValue(e.target.value);
                        }} />
                        {wrongEmail && <span className='loginPanel_errorText'>This email is not registered</span>}
                    </label>
                    <label htmlFor="email">Enter your password:
                        <input name='password' type="password" value={passwordValue} onChange={(e) => {
                            resetErrorText();
                            setPasswordValue(e.target.value);
                            }} />
                        {wrongPassword && <span className='loginPanel_errorText'>Entered password is incorrect</span>}
                    </label>
                    <button type='submit' className='loginPage_loginBtn' onClick={handleLogin}>
                        Login
                    </button>
                </form>
                <button className='loginPanel_closeBtn' onClick={() => setShowLogin(false)}>X</button>
            </div>
        </div>
    )
}

export default LoginPanel;