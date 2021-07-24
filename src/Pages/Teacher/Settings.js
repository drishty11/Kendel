import React from 'react';
import { ConductedNavbar } from '../../Components/ExamNavbar/ExamNavbar';

// import { DownArrow, Cross } from '../../../../images/Icons/icons';
import Navbar from '../../Components/Navbar/Navbar';
import './Settings.css';

export default function Settings({ toggleSidebar, sidebarOpen }) {

    // const questions = [
    //     {
    //         Question: 'Lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',

    //     }
    // ]
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <ConductedNavbar />
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4 non-conduct">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Physics</button>
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Chemistry</button>
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Maths</button>
                    </div>
                    <div className="d-flex flex-column p-3 question-box mr-4" style={{ width: '70%'}}>
                        <div className="d-flex flex-row align-items-center justify-content-between mb-2" style={{ width: '60%'}}>
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 question-dropdown h6 position-relative disabled">
                                Single Question
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black h6 mr-2">Marks:</label>
                                    <h6>4</h6>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black h6 mr-2">Negative: </label>
                                    <h6>4</h6>
                                </div>
                        </div>
                        <div>
                            <p className="mb-0" style={{fontSize: '16px', color: '#000'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. </p>
                            <div>
                                <input id="styled-checkbox-1" type="checkbox" value="value1" className="styled-checkbox mr-3" />
                                <label className="styled-checkbox-1 d-flex align-items-center justify-content-start answer w-100 mr-3 mb-0">a</label>
                            </div>
                            <div>
                                <input id="styled-checkbox-1" type="checkbox" value="value1" className="styled-checkbox mr-3" />
                                <label className="styled-checkbox-1 d-flex align-items-center justify-content-start answer w-100 mr-3 mb-0">b</label>
                            </div>
                            <div>
                                <input id="styled-checkbox-1" type="checkbox" value="value1" className="styled-checkbox mr-3" />
                                <label className="styled-checkbox-1 d-flex align-items-center justify-content-start answer w-100 mr-3 mb-0">c</label>
                            </div>
                            <div>
                                <input id="styled-checkbox-1" type="checkbox" value="value1" className="styled-checkbox mr-3" />
                                <label className="styled-checkbox-1 d-flex align-items-center justify-content-start answer w-100 mr-3">d</label>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-end align-items-center mb-2 button-sec">
                            <button type="button" className="btn-question other-text bg-white">Reset</button>      
                            <button type="button" className="btn-question blue-bg text-white ml-4">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}
