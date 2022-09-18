import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import logo from './Free_Sample_By_Wix.png.jfif'

const Header = () => {
    return (
        <div>
            <div className='main-div-header'>
                <div>
                    <img className='logo' src={logo} alt="" />
                </div>
                <div className='header-links'>
                    <Link className='links' to='/programs'>Programs</Link>
                    <Link className='links' to='/about'>About Us</Link>
                    <Link className='links' to="/signup">Join Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;