import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Login.css'

const Login = () => {
    const [ data, setData ] = useState({
        email: "",
        password: "",
    })

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name] : input.value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [ showPassword, setShowPassword ] = useState(false);
    const handleToggle = () => { setShowPassword(!showPassword)};

  return (
    <div className='login'>
        <div className="login_container">
            <div id="left">
                <h1>New User ?</h1>
                <Link to='/signup'>
                    <button className='control'>Sign Up</button>
                </Link>
            </div>
            <div id="right">
                <form className='form_container' onSubmit={handleSubmit}>
                    <h1>Login to your account</h1>
                    <div className="email">
                        <input 
                            type='email'
                            placeholder='email'
                            name='email'
                            onChange={handleChange}
                            value= {data.email}
                            required
                            className='details'
                        />
                    </div>
                    <div className="password">
                        <div id="container">
                            <input 
                                type={ showPassword ? 'text' : 'password' }
                                placeholder='password'
                                name='password'
                                onChange={handleChange}
                                value= {data.password}
                                required
                                className='details'
                            />
                            <IconButton onClick={handleToggle} className='passwordtoggle'>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </div>
                    </div>
                    <div className='forgotpassword'>
                        <Link to='/reset'>
                            <p className="forgot">Forgot password?</p>
                        </Link>
                    </div>
                    <button type='submit' className='control right'>Login</button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Login;