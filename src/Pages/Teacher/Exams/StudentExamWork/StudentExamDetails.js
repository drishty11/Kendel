import React, { useState } from 'react';
import { ConductedNavbar } from '../../../../Components/ExamNavbar/ExamNavbar';
import ResultInfo from '../../../../Components/ExamModal/ResultInfo/ResultInfo';
import { DownArrow, Cross, RightArrow1 } from '../../../../images/Icons/icons';
import Navbar from '../../../../Components/Navbar/Navbar';
import './StudentExamDetails.css';

export default function StudentExamDetails({ toggleSidebar, sidebarOpen }) {

    const [resultinfo, setResultInfo] = useState(false);

    const toggleResultInfo = () => {
        setResultInfo(!resultinfo);
    }

    // const questions = [
    //     {
    //         Question: 'Lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',

    //     }
    // ]
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <ConductedNavbar />
            <div className={`${resultinfo ? 'exam-background' : '' } w-100 position-fixed`}></div>
            <div className="d-flex justify-content-center align-items-center">
                <ResultInfo show={resultinfo} close={toggleResultInfo} />    
            </div>
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 text-white mb-3 statistics-btn" onClick={() => setResultInfo(!resultinfo)} style={{ width: '200px', height:'45px' }}>
                        See Result Statistics
                        <RightArrow1 />
                    </button>
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Physics</button>
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Chemistry</button>
                        <button className="border-0 d-flex justify-content-center align-items-center subject mr-3 mb-0 text-white position-relative">Maths</button>
                    </div>
                    <div className="d-flex flex-column p-3 question-box mr-4 mb-5" style={{ width: '70%'}}>
                        <div className="d-flex flex-row align-items-center justify-content-between mb-2" style={{ width: '60%'}}>
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 question-dropdown h6 position-relative disabled">
                                Single Question
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black h6 mr-2">Marks Obtained:</label>
                                    <h6><span>0</span>/<span>4</span></h6>
                                </div>
                        </div>
                        <div>
                            <p className="mb-3" style={{fontSize: '16px', color: '#000'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. </p>
                            <div  style={{ width: '50%'}}>
                                <div className="d-flex mb-3 options correct px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox1" checked />
                                        <label for="checkbox1"></label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-row w-100">
                                        <h6 className="ml-4 mb-0">a</h6>
                                        <h6 className="mb-0 text-white mr-3">correct answer</h6>
                                    </div>
                                </div>
                                <div className="d-flex mb-3 options px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox2" disabled />
                                        <label for="checkbox2"></label>
                                    </div>
                                    <h6 className="ml-4">b</h6>
                                </div>
                                <div className="d-flex mb-3 options px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox3" disabled />
                                        <label for="checkbox3"></label>
                                    </div>
                                    <h6 className="ml-4">c</h6>
                                </div>
                                <div className="d-flex mb-3 options wrong px-2">
                                    <div class="cross">
                                        <input type="checkbox" id="checkbox4" checked  />
                                        <label for="checkbox4"></label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-row w-100">
                                        <h6 className="ml-4 mb-0">d</h6>
                                        <h6 className="mb-0 text-white mr-3">wrong answer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-3 question-box mr-4 mb-5" style={{ width: '70%'}}>
                        <div className="d-flex flex-row align-items-center justify-content-between mb-2" style={{ width: '60%'}}>
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 question-dropdown h6 position-relative disabled">
                                Single Question
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black h6 mr-2">Marks Obtained:</label>
                                    <h6><span>0</span>/<span>4</span></h6>
                                </div>
                        </div>
                        <div>
                            <p className="mb-3" style={{fontSize: '16px', color: '#000'}} >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                            consequat. </p>
                            <div  style={{ width: '50%'}}>
                                <div className="d-flex mb-3 options correct px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox1" checked />
                                        <label for="checkbox1"></label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-row w-100">
                                        <h6 className="ml-4 mb-0">a</h6>
                                        <h6 className="mb-0 text-white mr-3">correct answer</h6>
                                    </div>
                                </div>
                                <div className="d-flex mb-3 options px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox2" disabled />
                                        <label for="checkbox2"></label>
                                    </div>
                                    <h6 className="ml-4">b</h6>
                                </div>
                                <div className="d-flex mb-3 options px-2">
                                    <div class="round">
                                        <input type="checkbox" id="checkbox3" disabled />
                                        <label for="checkbox3"></label>
                                    </div>
                                    <h6 className="ml-4">c</h6>
                                </div>
                                <div className="d-flex mb-3 options wrong px-2">
                                    <div class="cross">
                                        <input type="checkbox" id="checkbox4" checked />
                                        <label for="checkbox4"></label>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center flex-row w-100">
                                        <h6 className="ml-4 mb-0">d</h6>
                                        <h6 className="mb-0 text-white mr-3">wrong answer</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div> 
    )
}