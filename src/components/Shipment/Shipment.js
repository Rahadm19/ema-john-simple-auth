import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from './../Flat-design-Google-logo-design-Vector-PNG.png'
import { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init'

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAdress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    const [error1, setError1] = useState('');
    const navigate =useNavigate();

   


    const handleNameBlur = event =>{
        setName(event.target.value)
    }
    const handleAddressBlur = event =>{
        setAdress(event.target.value)
    }
    const handlePhoneBlur = event =>{
        setPhone(event.target.value)
    }

    

    const handleShipping = event =>{
        event.preventDefault();
        const shipping = [name, email, address, phone]
        console.log(shipping);
        navigate('/payment')
    }
    return (
        <div>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipment</h2>
                <hr />
                <form onSubmit={handleShipping}>
                <div className="input-group">
                        <label htmlFor="email">Name</label>
                        <input onBlur={handleNameBlur} type="Name" name="Name" id="" placeholder='Name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="" placeholder='Valid Email' />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={handleAddressBlur} type="text" name="address" id="" placeholder='Your address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input onBlur={handlePhoneBlur} type="number" name="number" id="" placeholder='Your Phone' required />
                        <p style={{color: 'red'}}>{error}</p>
                    </div>
                    <br />
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
        </div>
    );
};

export default Shipment;