import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'

const Register = () => {

    const[ register, setRegister ] = useState({
        name:'',
        email:'',
        password:'',
        password2:''
    });

    const [ unVisible, setUnVisible ] = useState(true);

    const { name, email, password, password2 } = register;

    const handleChange = (e) => {
        setRegister({...register, [e.target.name]:e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(register);
    }

    const toggle = () => {
        setUnVisible(!unVisible);
    }

    return(
        <section className='authSection'> 
            <h2>Registration</h2>
            <form onSubmit={handleSubmit} className='authFrom'>
                <input type='text' name='name' value={name} placeholder='Name:' 
                 onChange={handleChange} required />
                <input type='email' name='email' value={email} placeholder='E-mail:'
                 onChange={handleChange} required />
                 <div className='toggle'>
                    <input type={unVisible ? 'password':'text'} name='password' value={password} placeholder='Password:'
                    onChange={handleChange} required />
                    <span onClick={toggle}>{unVisible ? <i className='iconVisibility'><MdVisibilityOff /></i> : 
                    <i className='iconVisibility'><MdVisibility  /></i> }</span>
                 </div>     
                <input type='password' name='password2' value={password2} placeholder='Confirm Password:'
                 onChange={handleChange} required />
                <input type="submit" value='Submit'/>
                <p>Do you already have an account 
                 <Link to='/login' style={{ color: 'green', textDecoration:'none' }}> Press here</Link> </p>
            </form>
        </section>
    );
}

export default Register;