import React from 'react';
import {Link} from "react-router-dom";
import auth from "../../../firebase.init";
import {signOut} from 'firebase/auth'
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div className={'navbar bg-base-100 border-b border-blue-300 hover:bg-base-200'}>
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16"/>
                        </svg>
                    </label>
                    <ul tabIndex="0"
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href={'/#InventoryDetails'}>Inventory</a></li>
                        <li tabIndex="0">
                            <a className="justify-between">
                                Manage items
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                     viewBox="0 0 24 24">
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/>
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li><a>My items</a></li>
                                <li><a>Add items</a></li>
                            </ul>
                        </li>
                        <li><Link to={'/blogs'}>Blogs</Link></li>
                    </ul>
                </div>
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">ChemistPerfume</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href={'/#InventoryDetails'}>Inventory</a></li>
                    <li><a>Item 3</a></li>
                    <li tabIndex="0">
                        <a>
                            Manage Items
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                 viewBox="0 0 24 24">
                                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
                            </svg>
                        </a>
                        <ul className="p-3.5 bg-sky-100 text-black">
                            <li className={'hover:bg-pink-200'}><a>My items</a></li>
                            <li className={'hover:bg-pink-200'}><a>Add items</a></li>
                            <li className={'hover:bg-pink-200'}><a>Submenu 3</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={() => signOut(auth)} className="btn">Log Out</button>
                        : <Link to={'/login'} className="btn">Get started</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;