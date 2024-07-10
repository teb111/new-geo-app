import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import './Signup.css';

const Signup = () => {
    const [ data, setData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [ showPassword, setShowPassword ] = useState(false);
    const handleTogglePassword = () => { setShowPassword(!showPassword) };
    
    const [ showConfirmPassword, setShowConfirmPassword ] = useState(false);
    const handleToggleConfirmPassword = () => { setShowConfirmPassword(!showConfirmPassword)}

    const [ passwordError, setPasswordError ] = useState("");

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value });

        if (input.name === 'confirmPassword') {
            if (data.password !== input.value) {
                setPasswordError("Passwords do not match");
            } else {
                setPasswordError("");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (data.password !== data.confirmPassword) {
            setPasswordError("Passwords do not match");
            return;
        }
    }

  return (
    <div className='signup'>
        <div className="signup_container">
            <div className="left">
                <h1 className="title">Welcome Back</h1>
                <Link to='/login'>
                    <button className='button'>
                        Sign In
                    </button>
                </Link>
            </div>
            <div className="right">
                <form className='form_container' onSubmit={handleSubmit}>
                    <h1>Create Account</h1>
                    <input 
                        type='text'
                        placeholder='firstname'
                        name='firstName'
                        onChange={handleChange}
                        value={data.firstName}
                        required
                        className='input'
                    />
                    <input 
                        type='text'
                        placeholder='lastname'
                        name='lastName'
                        onChange={handleChange}
                        value={data.lastName}
                        required
                        className='input'
                    />
                    <input 
                        type='email'
                        placeholder='email'
                        name='email'
                        onChange={handleChange}
                        value={data.email}
                        required
                        className='input'
                    />
                    <div className="password">
                        <div id="container">
                            <input 
                            type={ showPassword ? 'text' : 'password' }
                            placeholder='password'
                            name='password'
                            onChange={handleChange}
                            value={data.password}
                            required
                            className='input'
                            />
                            <IconButton onClick={handleTogglePassword} className='passwordtoggle'>
                                {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </div>
                    </div>
                    <div className="confirmpassword">
                        <div id="container">
                            <input 
                            type={ showConfirmPassword ? 'text' : 'password' }
                            placeholder='confirm password'
                            name='confirmPassword'
                            onChange={handleChange}
                            value={data.confirmPassword}
                            required
                            className='input'
                            />
                            <IconButton onClick={handleToggleConfirmPassword} className='passwordtoggle'>
                                {showConfirmPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </div>
                        {passwordError && <span className="error">{passwordError}</span>}
                    </div>
                    <button type='submit' className='button two' disabled={passwordError !== ""}>
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
};

export default Signup;