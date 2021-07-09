import React, { useState } from 'react';
import { FaEyeSlash, FaEye } from 'react-icons/all';
import { Link } from 'react-router-dom';
import image  from '../../images/Frame 29.png';
import  logo  from '../../images/logo.png';
import './Login.css';

export default function Login() {

    const [ eyes, setEyes ] = useState(false);
    return (

        <div className="w-100 m-auto px-3 md:px-6" style={{ height: '100vh'}}>
             <img src={logo} alt="logo" width="150px" className="pt-3 pl-3" />
                <div className="d-flex flex-row login m-auto p-md-4">
                    <div className="left d-flex align-items-center justify-content-center" style={{ flex: '1'}}>
                        <section className="copy position-relative text-center">
                            <h6 className="mb-3 text-danger">Welcome back!!</h6>
                            <h6 className="mb-4 primary-text">Login To Your Account</h6>
                            <form>
                                <div className="input-container">
                                    <input
                                      className="w-100 d-flex align-items-center input-form px-4 py-2 mb-3"
                                      placeholder="Institute ID"
                                      required
                                    />
                                </div>
                                <div className="input-container">
                                    <input
                                      className="w-100 d-flex align-items-center input-form px-4 py-2 mb-3"
                                      placeholder="Email"
                                      required
                                    />
                                </div>
                                <div className="input-container">
                                    <input
                                      className="w-100 d-flex align-items-center input-form px-4 py-2 mb-2"
                                      type={eyes ? 'text' : 'password'}
                                      placeholder="Password"
                                      required
                                    />
                                    {eyes ? (
                                      <FaEyeSlash onClick={() => setEyes(false)} size={24} className="position-absolute eyeIcon pointer" />
                                    ) : (
                                      <FaEye onClick={() => setEyes(true)} size={24} className="position-absolute eyeIcon pointer" />
                                  )}
                                </div>
                                <div className="d-flex flex-column">
                                    <Link to="reset-password" className="fpass d-flex justify-content-end align-items-end text-decoration-none mt-2 mb-3 pointer other-text font-weight-bold">Forgot Password?</Link>
                                    <button className="login-btn d-flex justify-content-center align-items-center border-0 secondary-bg text-white pointer p-2" type="submit">Login</button>
                                </div>
                            </form>
                        </section>    
                    </div>
                    <div className="right align-items-center justify-content-center d-none d-md-flex" style={{ flex: '1'}}>
                        <section className="copy">
                            <img src={image} alt="image1" className="copy-img" width="400px" height="400px" />
                        </section>
                    </div>
                </div>
        </div>
    )
}
