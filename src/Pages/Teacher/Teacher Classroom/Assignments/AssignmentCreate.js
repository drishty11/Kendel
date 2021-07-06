import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { Add, DownArrow } from '../../../../images/Icons/icons';
import { DropdownAdd, PostDropdown, StudentDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import { Link } from 'react-router-dom';
import './AssignmentCreate.css';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';

export default function AssignmentCreate({ toggleSidebar, sidebarOpen }) {

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/assignments', label: 'Assignment'},
        {to: '/classes/classroom/assignments/assign', label: 'Assign Assignments'},
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
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                <form className="w-100 form pt-5 pb-2 px-4 mb-5">
                        <div className="mb-5">
                            <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-2 text-area mb-2 mb-md-4" 
                            rows="2" />
                            <textarea name="content" placeholder="Description" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-2 text-area text-area-1 mb-2 mb-md-4" 
                            rows="3" />
                            
                        </div>
                        <div className="d-flex flex-column justify-content-between btn-section flex-lg-row ">
                            <div className="d-flex justify-content-between btn-1 flex-wrap">
                              
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center mb-3" style={{ width: '100px', height: '40px'}} onClick={(e) => setActive('Add')}><Add /> Add</button>
                                {active === 'Add' ? <DropdownAdd ref={Dropdownref} /> : '' } 
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center mb-3" style={{ width: '130px', height: '40px'}} onClick={() => setActive('Student')} >All Students {active === 'Student' ? <StudentDropdown ref={Dropdownref} /> : '' } </button>
                               <div className="d-flex flex-column mb-4" style={{ width: '100px', height: '30px'}}>
                                   <h5 className="points">Points</h5>
                                   <input type="number" className="dropdownbtn bg-white p-1 other-text" />
                               </div>
                               <div className="d-flex flex-column bg-white mb-4">
                                   <h5>Due</h5>
                                   <div className="d-flex flex-row">
                                        <button className="dropdownbtn other-text d-flex justify-content-center align-items-center mb-3 p-2">Due Date & Time <DownArrow  /></button>          
                                   </div>
                               </div>
                               
                            </div>
                            <div className="d-flex justify-content-between btn-2">
                                <button type="button" className="dropdownbtn" style={{ width: '100px', height: '40px'}} disabled={title === '' ? true : false}>Cancel</button>
                                <Link to="/classes/classroom/assignments/assignmentname" type="button" className={`${title === '' ? 'disable' : 'able'} dropdownbtn d-flex align-items-center justify-content-center text-decoration-none`} style={{ width: '130px', height: '40px'}} disabled={title === '' ? true : false}> Assign</Link>
                            </div>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>        
    )
}
