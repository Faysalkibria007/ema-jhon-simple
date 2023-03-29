import React from 'react';
import "./Header.css"
import logo from '../../images/Logo.svg';

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
           <div>
           <a herf="/shop">Shop</a>
            <a herf="/order">Order</a>
            <a herf="/inventory">Inventory</a>
            <a herf="/login">Login</a>
           </div>
        </nav>
    );
};

export default Header;