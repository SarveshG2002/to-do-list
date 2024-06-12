import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS for the navbar

function Navbar() {
    return (
        <nav className="">
            <div className='username'>
                Sarvesh@gmailcom
            </div>
            &emsp;
            <div className='searchBar'>
                <input type='search' placeholder ='Search . . .' ></input>
            </div>
            <button className='logoutButton' onClick={() => { localStorage.removeItem('username'); window.location.reload(); }}>Logout</button>
        </nav>
    );
}

export default Navbar;
