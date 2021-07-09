import React from 'react';
import image  from '../../../images/Frame 29.png';
import logo  from '../../../images/logo.png';
import './Verification.css';

export default function Verification() {
    return (
        <div className="w-100 m-auto px-3 md:px-6" style={{ height: '100vh'}}>
            <img src={logo} alt="logo" width="150px" className="pt-3 pl-3" />
            <div className="d-flex flex-column verify text-center m-auto p-md-4">
                <h5 className="primary-text">OTP Verification</h5>
                <div className="d-flex flex-row" style={{ height: '315px'}}>
                    <div className="d-flex flex-column align-items-center justify-content-center" style={{ flex: '1'}}>
                       <section className="copy position-relative text-center">
                            <h6 className="primary-text">Enter your Mobile Number</h6>
                            <div className="d-flex flex-column">
                                <p style={{ fontSize: '16px' }} className="other-text font-weight-bold">we will send you an OTP to verify your account</p>
                                <input className="w-100 d-flex align-items-center input px-4 py-2 mb-4" placeholder="Mobile Number" type="text" />
                                <button className="OTP-btn secondary-bg text-white border-0 pointer">Send OTP</button>
                            </div>
                        </section> 
                    </div>
                    <div className="right align-items-center justify-content-center d-none d-md-flex" style={{ flex: '1'}}>
                        <section className="copy d-flex justify-content-center">
                            <img src={image} alt="image1" className="copy-img" width="400px" height="400px" />
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}
