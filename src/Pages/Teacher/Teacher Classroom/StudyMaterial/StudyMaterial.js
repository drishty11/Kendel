import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { Frame29, ThreeDot, Addition } from '../../../../images/Icons/icons';
import { TeacherDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import './StudyMaterial.css';
export default function StudyMaterial({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/studymaterial', label: 'Study Material'},
      ]

    const Dropdownref = useRef(null);

    const [active, setActive] = useState('');

    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (active && Dropdownref.current && !Dropdownref.current.contains(e.target)) {
            setActive(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [active])

    const Materials = [
        {
            name: 'Electromagnetic Notes',
            date: '1 Mar',
        },
        {
            name: 'Electromagnetic Notes',
            date: '2 Mar',
        },
        {
            name: 'Electromagnetic Notes',
            date: '3 Mar',
        },
        {
            name: 'Electromagnetic Notes',
            date: '4 Mar',
        },
        {
            name: 'Electromagnetic Notes',
            date: '5 Mar',
        },
        {
            name: 'Electromagnetic Notes',
            date: '6 Mar',
        },
    ]

    return (
        <div id="page-content-wrapper">
        <Navbar title={'Study Material'} toggleSidebar={toggleSidebar} />
        <BreadCrumbs crumbs={breadcrumbPath} />
            
            <Link to="/classes/classroom/studymaterial/uploadmaterial" className="position-absolute upload-btn d-flex align-items-center text-white text-decoration-none"><Addition height="18px" width="18px" /><span className="d-none d-md-block ml-2">Upload Material</span></Link>
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    {Materials.map((material,index) => {
                        return (
                            <div key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                                <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                                    <div className="d-flex flex-row justify-content-between align-items-start">
                                        <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                            <Frame29 />
                                         </div>
                                        <Link to="/classes/classroom/studymaterial/assignmentname" className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text">
                                            <h5>{material.name}</h5>
                                            <p className="mb-0">Posted on {material.date}</p>
                                        </Link>
                                    </div>
                                    <button className="border-0 outline-0 bg-transparent" onClick={() => setActive('ThreeDot')}>
                                        <ThreeDot />
                                        {active === 'ThreeDot' ? <TeacherDropdown ref={Dropdownref} /> : '' }
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
