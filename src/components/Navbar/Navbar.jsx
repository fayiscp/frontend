import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className='navbar'>
            <div>
                <h1 className='logo'>E-CART</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/login">LOGIN</Link>  </li>
                    <li><Link to="/signup">SIGNUP</Link></li>
                    <li>CART</li>
                    <li>LOGOUT</li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar