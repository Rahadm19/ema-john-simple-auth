import React from 'react';
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom';
import image from './../Flat-design-Google-logo-design-Vector-PNG.png'
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init'

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const navigate =useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);


    const handleNameBlur = event =>{
        setName(event.target.value)
    }
    const handleEmailBlur = event =>{
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event =>{
        setPassword(event.target.value)
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/shop')
    }

    const handleCreatUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword) {
            setError("You did't mathc the password");
            return;
        }
         if(password.length<6){
            setError1('Password must be 6 characters')
            return;
        }
       
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>LogIn</h2>
                <form onSubmit={handleCreatUser}>
                <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleNameBlur} type="Name" name="Name" id="" placeholder='Name' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='Valid Email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Password' />
                        <p style={{color: 'red'}}>{error1}</p>
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" placeholder='Confirm Password' />
                        <p style={{color: 'red'}}>{error}</p>
                    </div>
                    <br />
                    <input className='form-submit' type="submit" value="SignUp" />
                </form>
                <p>
                    Already Have an account? <Link className='form-link' to='/login'>Please Log In</Link>
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

export default Signup;