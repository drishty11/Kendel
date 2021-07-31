import React from 'react';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import Navbar  from '../../../../Components/Navbar/Navbar';
import { ThreeDot, Frame29 } from '../../../../images/Icons/icons';
import { TeacherDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import './Assignment.css';

export default function Assignment({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/studymaterial', label: 'Study Material'},
        {to: '/classes/classroom/studymaterial/assignmentname', label: 'Assignment Name'},
       
      ]
    return (

        <div id="page-content-wrapper">
            <Navbar title={'Study Material'} toggleSidebar={toggleSidebar} />
            <BreadCrumbs crumbs={breadcrumbPath} />
                <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                    <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                        <div className="d-flex flex-column justify-content-between align-items-center mb-3 assignment">
                            <div className="d-flex flex-row w-100 align-items-start px-2 py-3 justify-content-between">
                                <div className="d-flex flex-row justify-content-between align-items-start">
                                    <div className="d-flex justify-content-center align-items-center noteIcon mr-2">
                                        <Frame29 />
                                     </div>
                                    <div className="d-flex flex-column justify-content-center align-items-start">
                                        <h6>Electromagnetic Assignment</h6>
                                        <p className="mb-0">Posted on 1 Mar</p>
                                    </div>
                                </div>
                                <div className="position-relative">
                                    <TeacherDropdown />
                                </div>
                            </div>
                            <hr className="w-100 opacity-3 bg-white py-0.25 lining" />
                            <div className="py-3 pl-2 pl-sm-5">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                    <div className="d-flex flex-row upload m-2">
                                        <div className="d-flex flex-row assign-file px-0" style={{ borderRadius: '8px 0 0 8px'}}>
                                            <label className="profile mr-0 mb-0 primary-bg"> 
                                                <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " />
                                            </label>
                                        </div>
                                        <div className="d-flex flex-column assign-file px-0 pointer" style={{ borderRadius: '0 8px 8px 0'}}>
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

