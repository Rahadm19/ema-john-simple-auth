import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import image from './../Flat-design-Google-logo-design-Vector-PNG.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [email, setEmail] =useState('');
    const [password, setPassword] = useState('');

    const [
        SignInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePassworBlur = event =>{
        setPassword(event.target.value)
    }
    if(user){
        navigate(from, {replace:true});
    }

    const handleUserSignIn = event=>{
        event.preventDefault();
        SignInWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='UserName' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePassworBlur} type="password" name="password" id="" placeholder='Password' />
                        <p style={{color:'red'}}>
                            {
                                error?.message
                            }
                        </p>
                        {
                            loading && <p>Loading.....</p>
                        }
                    </div>
                    <br />
                    <input className='form-submit' type="submit" value="LogIn" />
                </form>
                <p>
                    New to ema-john? <Link className='form-link' to='/signup'>Create an account</Link>
                </p>
                <h4 className='border'><hr/>Or<hr/></h4>
                
                    <button className='button'>
                        <img src={image} alt="" />
                        <h4>Continue With Google</h4>
                    </button>
                <br />

            </div>
        </div>
    );
};

export default Login;