import {Link} from 'react-router-dom';
import '.././css/navbar.css';
import {useEffect, useState} from 'react';

const Navbar = () => {

    const searchProduct = () => {
        
    }

    return (
        <div className="navbar">
            Coffee website
            <div className="nv-group-1">
                <form action={searchProduct} method="POST">
                    <input type="search" />
                    <button type="submit" className="search-btn">Search</button>
                    <Link to="/products/">Products</Link>
                    {/* Not logged in */}
                    <Link to="/login">Login</Link>
                    {/* Logged in */}
                    <Link to="/profile">Profile</Link>
                    {/* only for admins */}
                    {/* <Link to="/">Admin</Link> */}
                </form>
            </div>
        </div>
    );
}
 
export default Navbar;