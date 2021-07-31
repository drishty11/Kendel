import React, { useEffect, useState, useRef } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { Add, DownArrow } from '../../../../images/Icons/icons';
// import {RiArrowUpSLine} from 'react-icons/all';
import { DropdownAdd, PostDropdown, StudentDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import { Link } from 'react-router-dom';
import './AssignmentCreate.css';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

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
    const [startDate, setStartDate] = useState(new Date());

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
            <div id="studymaterial" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-3 px-lg-4 mt-5 d-flex flex-column mb-4">
                <form className="w-100 form pt-4 pb-2 px-2 px-md-4 mb-4 mt-4 mt-md-0">
                        <div className="mb-3">
                            <textarea name="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 text-area mb-2 mb-md-4" 
                            rows="2" />
                            <textarea name="content" placeholder="Description" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 text-area text-area-1 mb-2 mb-md-4" 
                            rows="4" />
                            
                        </div>
                        <div className="d-flex justify-content-between align-items-end btn-1 flex-wrap mb-3" style={{width: '55%'}}>
                            <div className="d-flex flex-row mb-3">
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center" style={{ width: '80px', height: '35px', fontWeight: '600'}} onClick={(e) => setActive('Add')}><Add /> Add</button>
                                {active === 'Add' ? <DropdownAdd ref={Dropdownref} /> : '' } 
                            </div>
                            <div className="d-flex flex-row mb-3">
                                <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center" style={{ width: '130px', height: '35px', fontWeight: '600'}} onClick={() => setActive('Student')} ><span className="mr-2">All Students</span> {active === 'Student' ? <StudentDropdown ref={Dropdownref} /> : '' }<DownArrow size={22} className="mt-1" /></button>
                            </div>
                            <div className="d-flex flex-column mb-3">
                                <input type="number" placeholder="Points" className="dropdownbtn bg-white p-2 other-text" style={{ width: '100px', height: '35px', fontWeight: '600'}} />
                            </div>
                            <div className="d-flex flex-row mb-3 datepicker">
                                <DatePicker className="datepickerInput" selected={startDate} onChange={(date) => setStartDate(date)} timeInputLabel="Time:" dateFormat="MM/dd/yyyy h:mm aa" showTimeSelect disabledKeyboardNavigation placeholderText="Due Date and Time" />
                                {/* <button className="dropdownbtn other-text d-flex justify-content-center align-items-center p-2" style={{height: '35px', fontWeight: '600'}}>Due Date & Time <DownArrow  /></button>           */}
                            </div>    
                        </div>
                        <div className="w-100 d-flex justify-content-end align-items-end btn-2 mb-3">
                            <button type="button" className="dropdownbtn mr-4" style={{ width: '100px', height: '35px', fontWeight: '600'}} disabled={title === '' ? true : false}>Cancel</button>
                            <Link to="/classes/classroom/assignments/assignmentname" type="button" className={`${title === '' ? 'disable' : 'able text-white'} dropdownbtn d-flex align-items-center justify-content-center text-decoration-none`} style={{ width: '100px', height: '35px', fontWeight: '600'}} disabled={title === '' ? true : false}> Assign</Link>
                        </div>
                       
                    </form>
                </div>
            </div>
        </div>        
    )
}
