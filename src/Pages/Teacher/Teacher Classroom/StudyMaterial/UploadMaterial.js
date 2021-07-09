import React, { useRef, useState, useEffect } from 'react';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import Navbar from '../../../../Components/Navbar/Navbar';
import { Add, DownArrow } from '../../../../images/Icons/icons';
import { DropdownAdd, PostDropdown, StudentDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import { Link } from 'react-router-dom';

export default function UploadMaterial({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/studymaterial', label: 'Study Material'},
        {to: '/classes/classroom/studymaterial/uploadmaterial', label: 'Upload Material'},
    ]

    const Dropdownref = useRef(null);
    const [active, setActive] = useState('');
    const [title, setTitle] = useState('');

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
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Study Material'} toggleSidebar={toggleSidebar} />
            <BreadCrumbs crumbs={breadcrumbPath} />
            <div id="studymaterial" className={`container-fluid px-4 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-5 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <form className="w-100 form pt-4 pb-2 px-4 my-4">
                        <div className="mb-5">
                            <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 text-area mb-2 mb-md-4" 
                            rows="2" />
                            <textarea name="content" placeholder="Description" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 text-area text-area-1 mb-2 mb-md-4" 
                            rows="4" />
                            
                        </div>
                        <div className="d-flex flex-column justify-content-between btn-section flex-lg-row ">
                            <div className="d-flex justify-content-between btn-1 flex-wrap">
                              
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center mb-3" style={{ width: '100px', height: '40px'}} onClick={(e) => setActive('Add')}><Add /> Add</button>
                                {active === 'Add' ? <DropdownAdd ref={Dropdownref} /> : '' } 
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center mb-3" style={{ width: '130px', height: '40px'}} onClick={() => setActive('Student')} >All Students {active === 'Student' ? <StudentDropdown ref={Dropdownref} /> : '' } </button>
                              
                            </div>
                            <div className="d-flex justify-content-between btn-2">
                                <button type="button" className="dropdownbtn" style={{ width: '100px', height: '40px'}} disabled={title === '' ? true : false}>Cancel</button>
                                <Link to="/classes/classroom/studymaterial/assignmentname" type="button" className={`${title === '' ? 'disable' : 'able'} dropdownbtn d-flex align-items-center justify-content-center text-decoration-none`} style={{ width: '130px', height: '40px'}} disabled={title === '' ? true : false}> Post</Link>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>
    )
}
