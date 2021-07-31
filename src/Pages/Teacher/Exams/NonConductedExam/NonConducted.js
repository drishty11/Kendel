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
            {save ? <ExamNavbar1 sidebarOpen={sidebarOpen} /> :  <NonConductedNavbar sidebarOpen={sidebarOpen} setsave={setsave}  />}
            <div id="nonconducted" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh' }}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <div className="d-flex flex-row justify-content-start align-items-center mb-3 flex-wrap flex-md-nowrap">
                        <button type="button" className={`${save ? 'd-flex' : 'd-none'} border-0 bg-white p-0 mr-3`}><GrFormAdd className="addSection" /></button>
                        <button className="border-0 d-flex justify-content-center align-items-center mr-4 mb-0 text-white position-relative subject">Physics</button>
                        <button className="border-0 d-flex justify-content-center align-items-center mr-4 mb-0 text-black position-relative bg-transparent headerbtn-all p-0">Chemistry</button>
                        <button className="border-0 d-flex justify-content-center align-items-center mr-4 mb-0 text-black position-relative bg-transparent headerbtn-all p-0">Maths</button>
                    </div>
                    <div className="d-flex flex-column p-3 nonconducted-question-box mr-4 mb-5">
                        <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 nonconducted-question-dropdown mb-0 h6 position-relative disabled mr-md-4 mr-2">
                                Single Question
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                    <p className={`${save ? 'd-flex mark-line align-items-center justify-content-center' : 'd-none'} mb-0`} style={{color: '#063DB5', fontSize: '14px'}}>4</p>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Negative: </label>
                                    <p className={`${save ? 'd-flex mark-line align-items-center justify-content-center' : 'd-none'} mb-0`} style={{color: '#063DB5', fontSize: '14px'}}>4</p>
                                </div>
                            </div>
                            <div className="d-md-flex flex-row align-items-center justify-content-center d-none">
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-transparent`}><MdModeEdit size={24} /></button>
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-transparent`}><MdDelete size={24} /></button>
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
                            <div className="d-md-none flex-row align-items-center justify-content-center d-flex">
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 mx-2 bg-transparent`}><MdModeEdit size={24} /></button>
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 mx-2 bg-transparent`}><MdDelete size={24} /></button>
                            </div>
                            <button type="button" className="btn-question other-text bg-white mx-2">Reset</button>      
                            <button type="button" className="btn-question blue-bg text-white mx-2">Save</button>
                        </div>
                    </div>
                    <div className="d-flex flex-column p-3 nonconducted-question-box mr-4 mb-5">
                        <div className="d-flex flex-row justify-content-between align-items-center mb-2">
                            <div className="d-flex align-items-center">
                                <button className="d-flex flex-row align-items-center justify-content-center border-0 nonconducted-question-dropdown h6 mb-0 position-relative disabled mr-md-4 mr-2">
                                Single Question
                                </button>
                                <div className="d-flex flex-row align-items-center justify-content-center mr-md-4 mr-2">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Marks:</label>
                                    <p className={`${save ? 'd-flex mark-line align-items-center justify-content-center' : 'd-none'} mb-0`} style={{color: '#063DB5', fontSize: '14px'}}>4</p>
                                </div>
                                <div className="d-flex flex-row align-items-center justify-content-center">
                                    <label className="text-black mr-2 mb-0" style={{fontSize: '13px', fontWeight: '600'}}>Negative: </label>
                                    <p className={`${save ? 'd-flex mark-line align-items-center justify-content-center' : 'd-none'} mb-0`} style={{color: '#063DB5', fontSize: '14px'}}>4</p>
                                </div>
                            </div>
                            <div className="d-md-flex flex-row align-items-center justify-content-center d-none">
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-transparent`}><MdModeEdit size={24} /></button>
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 bg-transparent`}><MdDelete size={24} /></button>
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
                           <div className="d-md-none flex-row align-items-center justify-content-center d-flex">
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 mx-2 bg-transparent`}><MdModeEdit size={24} /></button>
                                <button className={`${save ? 'd-flex' : 'd-none'} border-0 mx-2 bg-transparent`}><MdDelete size={24} /></button>
                            </div>
                            <button type="button" className="btn-question other-text bg-white mx-2">Reset</button>      
                            <button type="button" className="btn-question blue-bg text-white mx-2">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}