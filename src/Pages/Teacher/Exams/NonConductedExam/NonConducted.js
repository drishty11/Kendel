import React, { useState } from 'react';
import { ExamNavbar1, NonConductedNavbar } from '../../../../Components/ExamNavbar/ExamNavbar';
import { GrFormAdd, MdModeEdit, MdDelete } from 'react-icons/all';
// import { DownArrow, Cross } from '../../../../images/Icons/icons';
import Navbar from '../../../../Components/Navbar/Navbar';
import './NonConducted.css';

export default function NonConducted({ toggleSidebar, sidebarOpen }) {

    const [save, setSave] = useState(false)

    const setsave = () => {
        setSave(true);
    }

    // const questions = [
    //     {
    //         Question: 'Lorem et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat?',

    //     }
    // ]
    return (
        <div id="page-content-wrapper">
            <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            {save ? <ExamNavbar1 /> :  <NonConductedNavbar setsave={setsave}  />}
            <div id="studymaterial" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                        <button type="button" className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white p-0 mr-3`}><GrFormAdd className="addSection" /></button>
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
                                    <label className="text-black h6 mr-2">Marks:</label>
                                    <h6>4</h6>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black h6 mr-2">Negative: </label>
                                    <h6>4</h6>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdModeEdit size={24} /></button>
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdDelete size={24} /></button>
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
                                <input type="checkbox" id="checkbox2" checked />
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
                    <div className="d-flex flex-column p-3 question-box mr-4 mb-5" style={{ width: '70%'}}>
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
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdModeEdit size={24} /></button>
                                    <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white mr-2`}><MdDelete size={24} /></button>
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
                                <input type="checkbox" id="checkbox3" />
                                <label for="checkbox3"></label>
                                <h6 className="ml-4">c</h6>
                            </div>
                            <div class="round d-flex mb-3">
                                <input type="checkbox" id="checkbox4" checked />
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