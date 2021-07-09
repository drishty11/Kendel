import React, { useState } from 'react';
import Navbar  from '../../Components/Navbar/Navbar';
import { Frame29, Addition } from '../../images/Icons/icons';
import { SharedDropdown, DraftedDropdown } from '../../Components/TeacherDropdown/TeacherDropdown';
import { Link } from 'react-router-dom';
import './Exam.css';

function Exam({toggleSidebar,sidebarOpen }) {

    const [ examtab, setExamtab ] = useState('Shared')
    const sharedExams = [
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28',
        },
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28'
        },
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28'
        },
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28'
        },
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28'
        },
        {
            name: 'Electromagnetism',
            created: 'Created: 2021-06-28',
            shared: 'Shared: 2021-06-28'
        },
    ]
    const DraftedExams = [
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
            
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
    ]
    return (
        <div id="page-content-wrapper">
        <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <nav className="Nav-breadcrumb position-fixed d-flex">
                <ol className="d-flex flex-row align-items-center mb-0 flex-wrap pl-2">
                    <div>
                        <button className={`${examtab === "Shared" ? "exam-header font-weight-bold" : "opacity-3 border-0 exam-disable"} bg-transparent p-2 p-md-3 mt-2 mx-4 other-text h6 mb-0`} onClick={() => setExamtab('Shared')}><h5 className="mb-0">Shared</h5></button>
                        <button className={`${examtab === "Drafted" ? "exam-header font-weight-bold" : "opacity-3 border-0 exam-disable"} bg-transparent p-2 p-md-3 mt-2 mx-4 other-text h6 mb-0`} onClick={() => setExamtab('Drafted')}><h5 className="mb-0">Drafted</h5></button>
                    </div>
                </ol>
            </nav>
            <Link to="" className="position-fixed upload-btn d-flex align-items-center text-white text-decoration-none"><Addition height="18px" width="18px" /><span className="d-none d-md-block ml-2">Create Exam</span></Link>
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    {(examtab === 'Shared' ? sharedExams : DraftedExams).map((exam,index) => {
                    return (
                        <div key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                            <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                        <Frame29 />
                                     </div>
                                    <Link to="" className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text pointer">
                                        <h6>{exam.name}</h6>
                                        <div className="d-flex flex-row align-items-center" style={{ color: '#838383'}}>
                                            <p className="mb-0 mr-2">{exam.created}</p>
                                            <p className={`${examtab === 'Shared' ? 'vertical-line' : '' } mr-2 mb-0`}></p>
                                            <p className="mb-0">{exam.shared}</p>
                                        </div>
                                    </Link>
                                </div>
                                <div className="position-relative">
                                    {examtab === 'Shared' ?  <SharedDropdown /> :  <DraftedDropdown />   }
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

export default Exam;
