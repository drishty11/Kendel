import React from "react";
import "./Classes.css";
import images1 from '../../images/jess-bailey-HyoRyMAVpNA-unsplash.jpg';
import { ThreeDot } from '../../images/Icons/icons';
import Navbar from "../../Components/Navbar/Navbar";
import { Link } from 'react-router-dom';
const Classes = ({ sidebarOpen, toggleSidebar }) => {
  return (
    <div id="page-content-wrapper">
    <Navbar title={'Classes'} toggleSidebar={toggleSidebar} />
      <div id="classes" className={`container-fluid px-4 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                
        <div className="row g-3 my-2 mt-5">
              <div className="col-md-6 col-xl-3">
                <div className="class-board d-flex flex-column justify-content-around mb-3 bg-white">
                  <div className="">
                    <img src={images1} alt="classes" className="imageof w-100 mb-3" height="120" />
                    <div className="class-pic position-absolute pointer"><ThreeDot /></div>
                  </div>
                  <Link to="/classes/classroom" className="text-decoration-none">
                      <div className="w-100 px-4 pb-2 ">
                        <h6 className="other-text">Class Name</h6>
                        <small className="content-text d-flex mb-2">Subject</small>
                        <small className="content-text d-flex mb-2">40 Students</small>
                      </div>
                  </Link>
                </div>
              </div>
    
              <div className="col-md-6 col-xl-3">
              <div className="class-board d-flex flex-column justify-content-around mb-3 bg-white">
                  <div className="">
                    <img src={images1} alt="classes" className="imageof w-100 mb-3" height="120" />
                    <div className="class-pic position-absolute pointer"><ThreeDot className="class-pic position-absolute" /></div>
                  </div>
                  <Link to="/classes/classroom" className="text-decoration-none">
                      <div className="w-100 px-4 pb-2">
                        <h6 className="other-text">Class Name</h6>
                        <small className="content-text d-flex mb-2">Subject</small>
                        <small className="content-text d-flex mb-2">40 Students</small>
                      </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
              <div className="class-board d-flex flex-column justify-content-around mb-3 bg-white">
                  <div className="">
                    <img src={images1} alt="classes" className="imageof w-100 mb-3" height="120" />
                    <div className="class-pic position-absolute pointer"><ThreeDot className="class-pic position-absolute" /></div>
                  </div>
                  <Link to="/classes/classroom" className="text-decoration-none">
                      <div className="w-100 px-4 pb-2">
                        <h6 className="other-text">Class Name</h6>
                        <small className="content-text d-flex mb-2">Subject</small>
                        <small className="content-text d-flex mb-2">40 Students</small>
                      </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-xl-3">
              <div className="class-board d-flex flex-column justify-content-around mb-3 bg-white">
                  <div className="">
                    <img src={images1} alt="classes" className="imageof w-100 mb-3" height="120" />
                    <div className="class-pic position-absolute pointer"><ThreeDot className="class-pic position-absolute" /></div>
                  </div>
                  <Link to="/classes/classroom" className="text-decoration-none">
                      <div className="w-100 px-4 pb-2">
                        <h6 className="other-text">Class Name</h6>
                        <small className="content-text d-flex mb-2">Subject</small>
                        <small className="content-text d-flex mb-2">40 Students</small>
                      </div>
                  </Link>
                </div>
              </div>
            </div>
       </div>
    </div>
  );
};
export default Classes;
