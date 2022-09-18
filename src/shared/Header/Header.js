import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='main-div-header'>
                <div>
                    <img src="https://udvash.com/media/Images/UDVASH/Common/Udvash-Logo.png" alt="" />
                </div>
                <div className='header-links'>
                    <Link className='links' to='/programs'>Programs</Link>
                    <Link className='links' to='/about'>About Us</Link>
                    <Link className='links' to="/signUp">Join Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;