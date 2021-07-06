import React, { useState } from 'react';
import  logo  from '../../images/logof.png';
import { Link } from 'react-router-dom';
import { Frame26, Frame27, Frame28, StudentsAll } from '../../images/Icons/icons';
import './TeacherSidebar.css';
import { LeftArrow1 } from '../../images/Icons/icons';

export default function TeacherSidebar({ sidebarOpen, closeSidebar, category }) {
    const [activeMenuItem, setActiveMenuItem] = useState(0);
    return (
        <div className={`${sidebarOpen ? "sidebar_active" : "close_sidebar"} d-flex flex-row`} id="wrapper">
            <div className="secondary-bg" id="sidebar-wrapper">
                <div className="sidebar-heading d-flex align-items-center justify-content-evenly text-center py-4 px-2 primary-text ml-md-0">
                    <div className=" d-md-flex d-none logo">
                       <img src={logo} alt="logo" width="150px" />
                    </div>
                </div>    

                    <div className="list-group list-group-flush my-0 my-md-3">
                        <p class="px-4 py-2 p6 mb-0 text-white">Classwork</p>
                        <hr className="opacity-3 bg-white py-0.25 border-0" />
                        <Link
                          to="/livelecture"
                          onClick={() => setActiveMenuItem(0)}
                          className={`${
                            activeMenuItem === 0 && "active text-decoration-none"
                          } sidebar text-decoration-none d-flex text-white secondary-text align-items-center`}
                        >
                          <Frame26 /> Join Live Lecture
                        </Link>
                        <Link
                          to="/joinlink"
                          onClick={() => setActiveMenuItem(1)}
                          className={`${
                            activeMenuItem === 1 && "active text-decoration-none"
                          } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white secondary-text`}
                        >
                          <Frame27 />  Update Join Link
                        </Link>
                        <Link
                          to="/classes/classroom/studymaterial"
                          onClick={() => setActiveMenuItem(2)}
                          className={`${
                            activeMenuItem === 2 && "active text-decoration-none"
                          } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
                        >
                          <Frame28 />  Study Material
                        </Link>
                        <Link
                          to="/classes/classroom/assignments"
                          onClick={() => setActiveMenuItem(3)}
                          className={`${
                            activeMenuItem === 3 && "active text-decoration-none"
                          } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
                        >
                          <Frame28 className="me-2 mr-3 navicon" /> Assignments
                        </Link>
                        <p class="px-4 pt-4 pb-2 p6 mb-0 text-white">People</p>
                        <hr className="opacity-3 bg-white py-0.25 border-0" />
                        <Link
                          to="/classes/classroom/people/attendancerecord"
                          onClick={() => setActiveMenuItem(5)}
                          className={`${
                            activeMenuItem === 5 && "active text-decoration-none"
                          } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
                        >
                          <StudentsAll />  Students Attendance
                        </Link>      
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <Link to="/classes" className="w-75 d-flex align-items-center justify-content-center sidebarBtn text-white text-decoration-none mb-3"><LeftArrow1 />Back to Classes</Link>
                        <Link to="/dashboard" className="w-75 d-flex align-items-center justify-content-center sidebarBtn text-white text-decoration-none"><LeftArrow1 />Back to Dashboard</Link>
                    </div>

            </div>
        </div>

    )
}
