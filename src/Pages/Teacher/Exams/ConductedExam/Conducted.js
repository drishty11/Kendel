import React from 'react';
import { ConductedNavbar } from '../../../../Components/ExamNavbar/ExamNavbar';
import { DownArrow, Cross } from '../../../../images/Icons/icons';
import Navbar from '../../../../Components/Navbar/Navbar';
import './Conducted.css';

export default function Conducted({ toggleSidebar, sidebarOpen }) {

    // const questions = [
    //     {
    //         Question: 'Lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',

    //     }
    // ]
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <ConductedNavbar sidebarOpen={sidebarOpen} />
            <div id="conducted" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3 flex-wrap flex-md-nowrap">
                        <button className="border-0 d-flex justify-content-center align-items-center mr-2 mb-3 mb-md-0 text-white position-relative subject">Physics</button>
                        <button className="border-0 d-flex justify-content-center align-items-center mr-2 mb-3 mb-md-0 text-black position-relative bg-transparent headerbtn-all">Chemistry</button>
                        <button className="border-0 d-flex justify-content-center align-items-center mr-2 mb-3 mb-md-0 text-black position-relative bg-transparent headerbtn-all">Maths</button>
                    </div>
                    <div className="d-flex flex-column p-3 conducted-question-box mr-4 mb-5">
                        <div className="d-flex flex-row align-items-center conducted-question-box1 justify-content-between mb-2" style={{ width: '50%'}}>
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 conducted-question-dropdown p6 position-relative disabled">
                                Single Correct
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                    <p className="mb-0" style={{color: '#063DB5', fontSize: '12px'}}>4</p>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Negative: </label>
                                    <p className="mb-0" style={{color: '#063DB5', fontSize: '12px'}}>4</p>
                                </div>
                        </div>
                        <div>
                            <p className="mb-3" style={{fontSize: '16px', color: '#000'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. </p>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox1" checked />
                                <label for="checkbox1" ></label>
                                <h6 className="ml-4">a</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox2" />
                                <label for="checkbox2"></label>
                                <h6 className="ml-4">b</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox3" />
                                <label for="checkbox3"></label>
                                <h6 className="ml-4">c</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox4" />
                                <label for="checkbox4"></label>
                                <h6 className="ml-4">d</h6>
                            </div>
                        </div>
                        <div className="d-flex flex-row justify-content-end align-items-center mb-2 button-sec">
                            <button type="button" className="btn-question other-text bg-white">Reset</button>      
                            <button type="button" className="btn-question blue-bg text-white ml-4">Save</button>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-3 conducted-question-box mr-4 mb-5">
                        <div className="d-flex flex-row align-items-center conducted-question-box1 justify-content-between mb-2" style={{ width: '50%'}}>
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 conducted-question-dropdown p6 position-relative disabled">
                                Single Correct
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                    <p className="mb-0" style={{color: '#063DB5', fontSize: '12px'}}>4</p>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Negative: </label>
                                    <p className="mb-0" style={{color: '#063DB5', fontSize: '12px'}}>4</p>
                                </div>
                        </div>
                        <div>
                            <p className="mb-3" style={{fontSize: '16px', color: '#000'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. </p>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox1" />
                                <label for="checkbox1" ></label>
                                <h6 className="ml-4">a</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox2" />
                                <label for="checkbox2"></label>
                                <h6 className="ml-4">b</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox3" checked />
                                <label for="checkbox3"></label>
                                <h6 className="ml-4">c</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox4" />
                                <label for="checkbox4"></label>
                                <h6 className="ml-4">d</h6>
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
