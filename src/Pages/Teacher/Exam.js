import React from 'react';
import Navbar  from '../../Components/Navbar/Navbar';

const Exam = ({ sidebarOpen, toggleSidebar}) => {
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Exam'} toggleSidebar={toggleSidebar} />
            <div id="profile" className={`container-fluid px-4 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <h1>Exam</h1>
            </div>
        </div>
    )
}

export default Exam
