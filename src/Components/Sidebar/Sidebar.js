import React, { useState } from "react";
import { ProfileUser, DashboardAll, ClassesAll, StudentsAll, ExamsAll, SettingsAll, LogoutAll } from '../../images/Icons/icons';
import { RiGroupLine, IoCheckboxOutline } from 'react-icons/all';
import { Link } from "react-router-dom";
import  images  from "../../images/userimg.jpg";
import  logo  from '../../images/logof.png'
import "./Sidebar.css";

export default function Sidebar({ sidebarOpen, closeSidebar, category }) {
  const [activeMenuItem, setActiveMenuItem] = useState(0);
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
            onClick={() => setActiveMenuItem(0)}
            className={`${
              activeMenuItem === 0 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex text-white secondary-text align-items-center`}
          >
            <ProfileUser /> Profile
          </Link>
          <Link
            to="/dashboard"
            onClick={() => setActiveMenuItem(1)}
            className={`${
              activeMenuItem === 1 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white secondary-text`}
          >
            <DashboardAll />  Dashboard
          </Link>
          <hr className="opacity-3 bg-white py-0.25 border-0" />
          <p class="text-uppercase px-4 py-2 p6 mb-0 text-white">Main</p>
          <Link
            to="/classes"
            onClick={() => setActiveMenuItem(2)}
            className={`${
              activeMenuItem === 2 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <ClassesAll />  Classes
          </Link>
          {category === 'institute' ? 
          <Link
            to="/staff"
            onClick={() => setActiveMenuItem(3)}
            className={`${
              activeMenuItem === 3 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <RiGroupLine className="me-2 mr-3 navicon" /> Staff
          </Link> : ''
          }
          {category === 'institute' ? 
          <Link
            to="/student"
            onClick={() => setActiveMenuItem(4)}
            className={`${
              activeMenuItem === 4 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <StudentsAll />  Student
          </Link> : ''
          }
          <Link
            to="/exam"
            onClick={() => setActiveMenuItem(5)}
            className={`${
              activeMenuItem === 5 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <ExamsAll />  Exam
          </Link>
          {category === 'institute' ? 
          <Link
            to="/attendance"
            onClick={() => setActiveMenuItem(6)}
            className={`${
              activeMenuItem === 6 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <IoCheckboxOutline className="me-2 mr-3 navicon" />
            <div class="dropdown">
              <button className="btn " style={{boxShadow:"none", color:"#fff"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Attendance
              </button>
              <div className="dropdown-menu p-1 mr-sm-5"  aria-labelledby="dropdownMenuButton">
                <Link to= "/teacherattendance" onClick={()=>setActiveMenuItem(9)} className="dropdown-item" type="button" href="#" >Staff Attendance</Link>
                <Link to= "/studentattendance" onClick={()=>setActiveMenuItem(10)} className="dropdown-item" type="button" href="#" >Student Attendance</Link>
              
              </div>
            </div>
          </Link> : ''
          }
         <hr className="opacity-5 bg-white py-0.25 border-0" /> 
          <p class="text-uppercase px-4 p6 py-2 mb-0 text-white">Others</p>
          <Link
            to="/settings"
            onClick={() => setActiveMenuItem(7)}
            className={`${
              activeMenuItem === 7 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <SettingsAll />  Settings
          </Link>
          <Link
            to="/logout"
            onClick={() => setActiveMenuItem(8)}
            className={`${
              activeMenuItem === 8 && "active text-decoration-none"
            } sidebar text-decoration-none d-flex justify-content-start align-items-center text-white`}
          >
            <LogoutAll />  Logout
          </Link>
        </div>
      </div>
    </div>
  );
}
