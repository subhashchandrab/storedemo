import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/counter">Counter Button</Link>
        </li>
        <li>
            <Link to="/product-list">Product List</Link>
        </li>      
        <li>
            <Link to="/userprofile">User Profile</Link>
        </li>         
        <li>
            <Link to="/forms">Forms</Link>
        </li>                       
    </ul>
)