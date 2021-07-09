import React from 'react';
import image  from '../../../images/Frame 29.png';
import  logo  from '../../../images/logo.png';
import './Picker.css';

export default function Picker() {
    return (
        <div className="w-100 m-auto px-3 md:px-6" style={{ height: '100vh'}}>
            <img src={logo} alt="logo" width="150px" className="pt-3 pl-3" />
            <div className="d-flex flex-row picker m-auto p-md-4">
                <div className="left d-flex align-items-center justify-content-center" style={{ flex: '1'}}>
                    <section className="copy position-relative text-center">
                        <h6 className="mb-4 other-text">What do you want to sign up as ?</h6>
                        <div className="d-flex flex-column border-0 ">
                            <button className="option-btn mb-4 pointer border-0 secondary-bg text-white">Teacher</button>
                            <button className="option-btn mb-4 pointer border-0 secondary-bg text-white">Student</button>
                            <button className="option-btn mb-4 pointer border-0 secondary-bg text-white">Institute</button>
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
    )
}
