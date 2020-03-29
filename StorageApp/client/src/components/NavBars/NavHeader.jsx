import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineLogin, AiOutlineUserAdd } from 'react-icons/ai';
import { FaMoon, FaSun } from 'react-icons/fa';

const NavHeader = () => {

    const [light, setLight] = useState(true);

    const toggleLight = () => {
        setLight(!light);
    }

    return(
        <header>
            <div className='logo'>Logo</div>
            <div className='menu'>
                <ul>
                    <Link to='/' style={{textDecoration: 'none'}}><li>Home</li></Link>
                    <Link to='/newRequest' style={{textDecoration: 'none'}}><li>Make Request</li></Link>
                    <Link to='/requestsAll' style={{textDecoration: 'none'}}><li>Requests</li></Link>
                </ul>
                <ul>
                    <Link to='/login' style={{textDecoration: 'none'}}><li className='iconContainer'><span><AiOutlineLogin/></span>Log-in</li></Link>
                    <Link to='/register' style={{textDecoration: 'none'}}><li className='iconContainer'><span><AiOutlineUserAdd/></span>Register</li></Link>
                </ul>
            </div>
            <div className='toggleLight' onClick={toggleLight}>{ light ? <i className='iconLight'><FaMoon /></i>
             : <i className='iconLight'><FaSun /></i>}
             </div>
        </header>     
    );
}

export default NavHeader;