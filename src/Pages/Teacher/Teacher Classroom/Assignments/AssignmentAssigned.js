import React from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { TeacherDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import { Link } from 'react-router-dom';
import {  Frame29 } from '../../../../images/Icons/icons';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import './AssignmentAssigned.css';

export default function AssignmentAssigned({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/assignments', label: 'Assignment'},
        {to: '/classes/classroom/assignments/assignmentname', label: 'Assignment Name'},
      ]
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Study Material'} toggleSidebar={toggleSidebar} />
            <BreadCrumbs crumbs={breadcrumbPath} />
                <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                    <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                        <div className="d-flex flex-column justify-content-between align-items-center mb-3 assignment">
                            <div className="d-flex flex-row w-100 align-items-center p-3 justify-content-between">
                                <div className="w-100 d-flex justify-content-start align-items-start">
                                    <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                        <Frame29 />
                                    </div>
                                    <div className="w-100 d-flex flex-column">
                                        <div className="d-flex flex-row justify-content-between align-items-start mb-4">
                                            <div className="d-flex flex-column justify-content-center align-items-start">
                                                <h3>Electromagnetic Assignment</h3>
                                                <p className="mb-0">Posted on 1 Mar</p>
                                            </div>
                                            {/* <TeacherDropdown /> */}
                                        </div>
                                        <div className="d-flex flex-row justify-content-between align-items-center">
                                            <h5>Ungraded  |  Due 16 Mar, 5 Pm</h5>
                                            <Link to="/classes/classroom/assignments/studentwork" className="underline text-decoration-none other-text">See Student Work</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                            <hr className="w-100 opacity-3 bg-white py-0.25 lining" />
                            <div className="py-md-4 px-md-5 p-3">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <div className="row upload m-1">
                                        <div className="col file px-0" style={{ borderRadius: '8px 0 0 8px'}}>
                                            <label className="profile mr-0 mb-0 primary-bg"> 
                                                <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " />
                                            </label>
                                        </div>
                                        <div className="col file px-0" style={{ borderRadius: '0 8px 8px 0'}}>
                                            <h6 className="my-3 mx-2">File Name</h6>
                                            <p className="mb-4 mx-2">Word File</p>
                                        </div>
                                    </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>            
    )
}
