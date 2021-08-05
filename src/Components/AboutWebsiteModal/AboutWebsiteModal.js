import React from 'react';
// import { MdEdit } from 'react-icons/all';
import { Link } from 'react-router-dom';
import { MdEdit } from 'react-icons/all';
import './AboutWebsiteModal.css';

export default function AboutWebsiteModal({show,close}) {
    return (
        <>
        { show ? 
        <div className="d-flex flex-column aboutwebsite position-absolute bg-white px-4 py-4 mt-3" id="aboutwebsite">
            <h6 className="mb-2">Get Suggestions</h6>
            <form className="">
                <div className="d-flex flex-row" style={{ fontSize: '13px'}}>
                  <div className="mr-2">
                    <MdEdit size={20} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  </p>
                </div>
                <div className="d-flex flex-row" style={{ fontSize: '13px'}}>
                  <div className="mr-2">
                    <MdEdit size={20} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  </p>
                </div>
                <div className="d-flex flex-row" style={{ fontSize: '13px'}}>
                  <div className="mr-2">
                    <MdEdit size={20} />
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                  </p>
                </div>
                <div className="d-flex flex-row justify-content-around align-items-center button-sec">     
                  <Link to="/createwebsite"
                    type="button"
                    className="button-div blue-bg text-white text-decoration-none d-flex justify-content-center align-items-center" onClick={close}>
                    Close
                  </Link>
                </div>
            </form>
        </div> : ''}
        </>
    )
}
