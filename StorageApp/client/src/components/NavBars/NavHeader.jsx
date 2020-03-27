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
                    <Link to='/' style={{textDecoration: 'none'}}><li>Начало</li></Link>
                    <Link to='/newRequest' style={{textDecoration: 'none'}}><li>Създай Заявка</li></Link>
                    <Link to='/requestsAll' style={{textDecoration: 'none'}}><li>Прегледай Заявки</li></Link>
                </ul>
                <ul>
                    <Link to='/login' style={{textDecoration: 'none'}}><li className='iconContainer'><span><AiOutlineLogin/></span>Вход</li></Link>
                    <Link to='/register' style={{textDecoration: 'none'}}><li className='iconContainer'><span><AiOutlineUserAdd/></span>Регистрация</li></Link>
                </ul>
            </div>
            <div className='toggleLight' onClick={toggleLight}>{ light ? <i className='iconLight'><FaMoon /></i>
             : <i className='iconLight'><FaSun /></i>}
             </div>
        </header>     
    );
}

export default NavHeader;