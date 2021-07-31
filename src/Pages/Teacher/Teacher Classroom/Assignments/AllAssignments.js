import React from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Frame29, Addition } from '../../../../images/Icons/icons';
import {IoIosAdd} from 'react-icons/all';
import { TeacherDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';

export default function AllAssignments({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/assignments', label: 'Assignment'},
      ]

    const Assignments = [
        {
            name: 'Electromagnetic Assignment',
            date: '1 Mar',
        },
        {
            name: 'Electromagnetic Assignment',
            date: '2 Mar',
        },
        {
            name: 'Electromagnetic Assignment',
            date: '3 Mar',
        },
        {
            name: 'Electromagnetic Assignment',
            date: '4 Mar',
        },
        {
            name: 'Electromagnetic Assignment',
            date: '5 Mar',
        },
        {
            name: 'Electromagnetic Assignment',
            date: '6 Mar',
        },
    ]
    return (
        <div id="page-content-wrapper">
        <Navbar title={'Study Material'} toggleSidebar={toggleSidebar} />
        <BreadCrumbs crumbs={breadcrumbPath} />
        <Link to="/classes/classroom/assignments/assign" className="position-fixed upload-btn d-flex align-items-center text-white text-decoration-none"><IoIosAdd size={22} /><span className="d-none d-lg-block ml-2" style={{fontSize: '14px'}}>Assign Assignment</span></Link>
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    {Assignments.map((assignment,index) => {
                        return (
                            <div key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                                <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                                    <div className="d-flex flex-row justify-content-between align-items-center">
                                        <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                            <Frame29 />
                                         </div>
                                        <Link to="/classes/classroom/assignments/assignmentname" className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text">
                                            <h6>{assignment.name}</h6>
                                            <p className="mb-0">Posted on {assignment.date}</p>
                                        </Link>
                                    </div>
                                    <div className="position-relative">
                                        <TeacherDropdown />  
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
