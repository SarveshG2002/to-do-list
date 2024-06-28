import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/Navbar.css'; // Import custom CSS for the navbar
import { RiMenuFill } from "react-icons/ri";

function Navbar() {
    return (
        <nav className="">
            <div className='navele'>
                <div className='username'>
                <RiMenuFill className='MenuIcon'/>
                    <span>Sarvesh@gmailcom</span>
                </div>
                &emsp;
                <div className='searchBar'>
                    <input type='search' placeholder ='Search . . .' ></input>
                </div>
            </div>
            <div className='navele'>
                <button className='logoutButton' onClick={() => { localStorage.removeItem('username'); window.location.reload(); }}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
