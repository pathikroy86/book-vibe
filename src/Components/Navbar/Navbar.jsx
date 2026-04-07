import React from 'react';
import { Link, Links, NavLink } from 'react-router';
import Home from '../../Pages/Home/Home';
import Books from '../../Pages/Books/Books';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='container mx-auto'>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><NavLink className='btn btn-ghost' to="/">Home</NavLink></li>
                            <li><NavLink className='btn btn-ghost' to="/listedBooks">Listed Books</NavLink></li>
                            <li><NavLink className='btn btn-ghost' to="/error">Pages to Read</NavLink></li>
                        </ul>
                    </div>
                    <Link className='btn btn-ghost text-xl' to="/">Book Vibe</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink className='btn btn-ghost' to="/">Home</NavLink></li>
                        <li><NavLink className='btn btn-ghost' to="/listedBooks">Listed Books</NavLink></li>
                        <li><NavLink className='btn btn-ghost' to="/error">Pages to Read</NavLink></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-3">
                    <a className="btn btn-success">Sign In</a>
                    <a className="btn btn-info">Sign Up</a>

                </div>
            </div>
        </div>
    );
};

export default Navbar;