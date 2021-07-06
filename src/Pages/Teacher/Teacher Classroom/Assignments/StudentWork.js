import React, {useState} from 'react';
import { DownArrow, Frame29 } from '../../../../images/Icons/icons';
import Navbar from '../../../../Components/Navbar/Navbar';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';
import './StudentWork.css';



const Submittedwork = () => {
    return (
        <div className="d-flex flex-column justify-content-between align-items-center mb-3 assignment">
        <div className="d-flex flex-row w-100 align-items-center p-3 justify-content-between">
            <div className="w-100 d-flex justify-content-start align-items-start">
                <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                    <Frame29 />
                </div>
                <div className="w-100 d-flex flex-column">
                    <div className="d-flex flex-row justify-content-between align-items-start mb-4">
                        <div className="d-flex flex-column justify-content-center align-items-start">
                            <h3>Electromagnetic Assignment</h3>
                            <p className="mb-0">Posted on 1 Mar</p>
                        </div>
                        {/* <TeacherDropdown /> */}
                    </div>
                </div>
            </div>
        </div>    
        <hr className="w-100 opacity-3 bg-white py-0.25 lining" />
        <div className="py-md-4 px-md-5 p-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <div className="row upload m-1">
                    <div className="col file px-0" style={{ borderRadius: '8px 0 0 8px'}}>
                        <label className="profile mr-0 mb-0 primary-bg"> 
                            <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " />
                        </label>
                    </div>
                    <div className="col file px-0" style={{ borderRadius: '0 8px 8px 0'}}>
                        <h6 className="my-3 mx-2">File Name</h6>
                        <p className="mb-4 mx-2">Word File</p>
                    </div>
                </div>
        </div>
        <hr className="w-100 opacity-3 bg-white py-0.25 lining" />
        <div className="py-md-4 px-md-5 p-3 w-100" >
            <h4 className="ml-2 mb-4">Student Work</h4>
            <div className="row upload m-1">
                <div className="col file px-0" style={{ borderRadius: '8px 0 0 8px'}}>
                    <label className="profile mr-0 mb-0 primary-bg"> 
                        <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " />
                    </label>
                </div>
                <div className="col file px-0" style={{ borderRadius: '0 8px 8px 0'}}>
                    <h6 className="my-3 mx-2">File Name</h6>
                    <p className="mb-4 mx-2">Word File</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default function StudentWork({ toggleSidebar, sidebarOpen }) {

    const [openWork, setopenWork] = useState(false);

    const breadcrumbPath = [
        {to: '/classes', label: 'Classes',},
        {to: '/classes/classroom', label: 'Class Name'},
        {to: '/classes/classroom/assignments', label: 'Assignment'},
        {to: '/classes/classroom/assignments/studentwork', label: 'Student Work'},
      ]

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
        <BreadCrumbs crumbs={breadcrumbPath} />
            <div id="studentwork" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    {openWork ? <Submittedwork /> :
                    <div className="w-100 table-header">
                        <div className="w-75 d-flex flex-row justify-content-between align-items-center student-head p-3">
                            <div className="d-flex flex-column">
                                <p className="font-weight-bold">Electromagnetism Assignment</p>
                                <div className="d-flex flex-row">
                                    <div className="d-flex flex-row mr-3">
                                        <p className="mr-1">All</p>
                                        <DownArrow />
                                    </div>
                                    <div className="d-flex flex-row mr-3">
                                        <p className="mr-1">30 Points</p>
                                        <DownArrow />
                                    </div>
                                </div>   
                            </div>
                            <div className="d-flex flex-row justify-content-around" style={{ width: '200px'}}>
                                <div className="d-flex flex-column align-items-center">
                                    <h4>1</h4>
                                    <p className="mb-0">Turned in</p>
                                </div>
                                <p className="vertical-line"></p>
                                <div className="d-flex flex-column align-items-center">
                                    <h4 >0</h4>
                                    <p className="mb-0">Assigned</p>
                                </div>
                            </div>
                        </div>
                        <table className="w-75">
                            <tbody>
                                <tr className="work">
                                    {work.map((student) => {
                                        return (
                                            <>
                                                <th className="d-flex flex-row justify-content-between align-items-center p-0" style={{ borderBottom: '0.25px solid'}}>
                                                    <div className="d-flex flex-row align-items-center studentWork" onClick={() => setopenWork(true)}>
                                                        <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                                            <p className="StudentChar d-flex align-items-center justify-align-center mb-0 font-weight-normal text-white">{student.firstChar}</p>
                                                        </div>
                                                        <p className="font-weight-normal mb-0">{student.studentName}</p>
                                                    </div>
                                                    <p className="font-weight-normal px-3 m-auto">{student.Submitted === true ? 'Submitted' : ' Missing'}</p>
                                                </th>
                                            </>
                                        )
                                    })}
                                </tr>
                            </tbody>

                        </table>
                    </div>}

                </div>
            </div>    
        </div>
    )
}
