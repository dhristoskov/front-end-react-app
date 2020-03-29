import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const Login = () => {

    const [ unVisible, setUnVisible ] = useState(true);

    const toggle = () => {
        setUnVisible(!unVisible);
    }

    return(
        <section className='authSection'> 
            <h2>Log-In</h2>
            <form className='authFrom'>
                <input type='email' name='email' placeholder='E-mail:' required />
                <div className='toggle'>
                    <input type={unVisible ? 'password':'text'} name='password'placeholder='Password:' required />
                    <span onClick={toggle}>{unVisible ? <i className='iconVisibility'><MdVisibilityOff /></i> : 
                    <i className='iconVisibility'><MdVisibility  /></i> }</span>
                 </div>  
                <input type="submit" value='Submit'/>
                <p>Do you already have an account <Link to='/register' style={{ color: 'green', textDecoration:'none' }}> Press here</Link> </p>
            </form>
        </section>
    );
}

export default Login;