import React, { useState } from 'react';
import Navbar from '../../../../Components/Navbar/Navbar';
import { ConductedNavbar } from '../../../../Components/ExamNavbar/ExamNavbar';
import { Link } from 'react-router-dom';
import './StudentExamWork.css';

export default function StudentExamWork({ toggleSidebar, sidebarOpen }) {

    // const [openWork, setopenWork] = useState(false);

    const work = [
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: true,
        },
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: false,
        },
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: false,
        },
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: false,
        },
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: false,
        },
        {
        firstChar: 'M',
        studentName: 'Mayra',
        Submitted: false,
        },
    ]
    return (
        <div id="page-content-wrapper">
        <Navbar title={'Assignments'} toggleSidebar={toggleSidebar} />
        <ConductedNavbar sidebarOpen={sidebarOpen} />
            <div id="StudentExamWork" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-5">
                    <div className="w-100 table-header">
                        <table className="w-75">
                            <tbody>
                                <tr className="work">
                                    {work.map((student) => {
                                        return (
                                            <>
                                                <th className="d-flex flex-row justify-content-between align-items-center p-0" style={{ borderBottom: '0.25px solid'}}>
                                                    <Link to="/exam/conducted/studentwork/studentexamdetails" className="d-flex flex-row align-items-center studentWork other-text text-decoration-none">
                                                        <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                                            <p className="StudentChar d-flex align-items-center justify-align-center mb-0 font-weight-normal text-white">{student.firstChar}</p>
                                                        </div>
                                                        <p className="font-weight-normal mb-0 pointer">{student.studentName}</p>
                                                    </Link>
                                                    <p className={`${student.Submitted === true ? 'other-text' : 'missing' } font-weight-normal px-3 m-auto pointer`}>{student.Submitted === true ? 'Submitted' : ' Missing'}</p>
                                                </th>
                                            </>
                                        )
                                    })}
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>    
        </div>
    )
}

