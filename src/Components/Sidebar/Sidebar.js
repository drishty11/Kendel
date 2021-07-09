import React, { useState } from "react";
import { ProfileUser, DashboardAll, ClassesAll, StudentsAll, ExamsAll, SettingsAll, LogoutAll } from '../../images/Icons/icons';
import { RiGroupLine, IoCheckboxOutline } from 'react-icons/all';
import { Link } from "react-router-dom";
import  images  from "../../images/userimg.jpg";
import  logo  from '../../images/logof.png'
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, closeSidebar, category, activeMenuItem }) {
  // const [activeMenuItem, setActiveMenuItem] = useState(0);
  return (
    <div
      className={`${
        sidebarOpen ? "sidebar_active" : "close_sidebar"
      } d-flex flex-row`}
      id="wrapper"
    >
      <div className="secondary-bg" id="sidebar-wrapper">
          <div className="sidebar-heading d-flex align-items-center justify-content-evenly text-center py-4 px-2 primary-text ml-md-0">
            <div className=" d-md-flex d-none logo">
               <img src={logo} alt="logo" width="150px" />
            </div>
            <div>
              <img width="70" height="70" className="user-img rounded-full rounded-md d-md-none mb-3" src={images} alt="user" />
              <h5 className="text-white d-md-none">Shruti Singh</h5>
            </div>
          
          </div>
        <div className="list-group list-group-flush my-3">
          <Link
            to="/"
            className={`${
              activeMenuItem === 'profile' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex text-white secondary-text align-items-center`}
          >
            <ProfileUser /> Profile
          </Link>
          <Link
            to="/dashboard"
            className={`${
              activeMenuItem === 'dashboard' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white secondary-text`}
          >
            <DashboardAll />  Dashboard
          </Link>
          <hr className="opacity-3 bg-white py-0.25 border-0" />
          <p class="text-uppercase px-4 py-1 mb-0 text-white" style={{ fontSize: '12px' }}>Main</p>
          <Link
            to="/classes"
            className={`${
              activeMenuItem === 'classes' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <ClassesAll />  Classes
          </Link>
          {category === 'institute' ? 
          <Link
            to="/staff"
            className={`${
              activeMenuItem === 'staff' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <RiGroupLine className="me-2 mr-3 navicon" /> Staff
          </Link> : ''
          }
          {category === 'institute' ? 
          <Link
            to="/student"
            className={`${
              activeMenuItem === 'student' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <StudentsAll />  Student
          </Link> : ''
          }
          <Link
            to="/exam"
            className={`${
              activeMenuItem === 'exam' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <ExamsAll />  Exam
          </Link>
          {category === 'institute' ? 
          <Link
            to="/attendance"
            className={`${
              activeMenuItem === 'attendance' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <IoCheckboxOutline className="me-2 mr-3 navicon" />
            <div class="dropdown">
              <button className="btn p-0 m-0" style={{boxShadow:"none", color:"#fff", fontSize:"14px"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Attendance
              </button>
              <div className="dropdown-menu"  aria-labelledby="dropdownMenuButton">
                <Link to= "/teacherattendance" className="dropdown-item" type="button" href="#" >Staff Attendance</Link>
                <Link to= "/studentattendance"  className="dropdown-item" type="button" href="#" >Student Attendance</Link>
              
              </div>
            </div>
          </Link> : ''
          }
         <hr className="opacity-5 bg-white py-0.25 border-0" /> 
          <p class="text-uppercase px-4 py-1 mb-0 text-white" style={{ fontSize: '12px' }}>Others</p>
          <Link
            to="/settings"
            className={`${
              activeMenuItem === 'settings' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <SettingsAll />  Settings
          </Link>
          <Link
            to="/logout"
            className={`${
              activeMenuItem === 'logout' && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <LogoutAll />  Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
