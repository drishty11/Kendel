import React, { useState } from 'react';
import { RightArrow, Students1All, Add, Send, LeftArrow } from '../../images/Icons/icons';
import { MdModeEdit, VscOpenPreview } from 'react-icons/all';
import './ExamNavbar.css';
import { Link } from 'react-router-dom';
import ExamName from '../ExamModal/ExamName/ExamName';
import Collaborator from '../ExamModal/Collaborator/Collaborator';



const NonConductedNavbar = ({setsave, sidebarOpen}) => {
    return (
        <nav className={`Nav-Exam position-fixed d-flex ${sidebarOpen ? 'sidebarActive' : ''}`}>
            <div className="d-flex flex-row justify-content-around align-items-center">
                {/* <div className="d-flex flex-row justify-content-around align-items-center" style={{ width: '400px'}}> */}
                    <LeftArrow />
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn mx-3" onClick={setsave} style={{ width: '140px', height:'38px' }}>
                        <MdModeEdit className="mr-2" />
                        Edit Exam
                    </button>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '140px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                {/* </div>  */}
            </div>
        </nav>
    )
}
const ConductedNavbar = ({sidebarOpen}) => {
    const [examname, setExamname] = useState(false)
    const toggleExamname = () => {
        setExamname(!examname);
    }
    
    return (
        <>
        <div className={`${examname ? 'exam-background' : '' } w-100 position-fixed`}></div>
            <div className="d-flex justify-content-center align-items-center">
                <ExamName show={examname} close={toggleExamname} />    
            </div>
        <nav className={`Nav-Exam position-fixed d-flex ${sidebarOpen ? 'sidebarActive' : ''}`}>
            <div className="d-flex flex-row justify-content-around align-items-center">
                <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn mr-4" onClick={() => setExamname(!examname)} style={{ width: '150px', height:'38px' }}>
                    Exam Details
                    <RightArrow />
                </button>
                <Link to="/exam/conducted/studentwork" className="d-flex flex-row justify-content-center align-items-center border-0 blue-bg text-white text-decoration-none exam-btn" style={{ width: '150px', height:'38px' }}>
                    Student Work   
                </Link>
            </div> 
        </nav>
        </>
    )
}

const ExamNavbar1 = ({sidebarOpen}) => {

    const [collaborator,setCollaborator] = useState(false)
    return (
        <nav className={`Nav-Exam position-fixed d-flex ${sidebarOpen ? 'sidebarActive' : ''}`}>
            <div className="d-flex flex-row justify-content-between align-items-center mb-0 pl-2 w-100">
                {/* <div className="d-flex flex-row justify-content-between align-items-center flex-wrap flex-md-nowrap"> */}
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-3 exam-btn" style={{ width: '150px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                    <div className="d-flex flex-row mr-md-4 mr-0 position-relative">
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-3 exam-btn exam-btn-2" onClick={() => setCollaborator(!collaborator)} style={{ width: '150px', height:'38px' }}>
                            <Students1All />
                            <span className="d-lg-block d-none">Collaborator</span>
                        </button>
                        {collaborator ? <Collaborator close={() => setCollaborator(!collaborator)} /> : ''}
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-3 exam-btn exam-btn-2" style={{ width: '150px', height:'38px' }}>
                            <Add />
                            <span className="d-lg-block d-none ml-2">Save</span>
                        </button>
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-3 exam-btn exam-btn-2" style={{ width: '150px', height:'38px' }}> 
                            <span className="d-lg-block d-none mr-2">Share</span>
                            <Send />
                        </button>
                    </div>    
                {/* </div> */}
            </div>
        </nav>
    )
}

const ExamNavbar = ({sidebarOpen}) => {

    const [collaborator,setCollaborator] = useState(false)
    return (
        <nav className={`Nav-Exam position-fixed d-flex ${sidebarOpen ? 'sidebarActive' : ''}`}>
            <div className="d-flex flex-row justify-content-between align-items-center mb-0 pl-2 w-100">
                <div className="d-flex flex-row">
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-2 exam-btn" style={{ width: '120px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                    <button className="d-flex justify-content-center align-items-center border-0 bg-white other-text mr-2 exam-btn exam-btn-2" style={{ width: '120px', height:'38px' }}>
                        <VscOpenPreview className="d-lg-none" />
                        <span className="d-lg-block d-none">Preview</span>
                    </button>
                 </div>   
                    <div className="d-flex flex-row mr-md-4 mr-0 position-relative">
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-2 exam-btn exam-btn-2" onClick={() => setCollaborator(!collaborator)} style={{ width: '150px', height:'38px' }}>
                            <Students1All />
                            <span className="d-lg-block d-none">Collaborator</span>
                        </button>
                        {collaborator ? <Collaborator close={() => setCollaborator(!collaborator)} /> : ''}
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-2 exam-btn exam-btn-2" style={{ width: '120px', height:'38px' }}>
                            <Add />
                            <span className="d-lg-block d-none ml-2">Save</span>
                        </button>
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text mr-2 exam-btn exam-btn-2" style={{ width: '120px', height:'38px' }}> 
                            <span className="d-lg-block d-none mr-2">Share</span>
                            <Send />
                        </button>
                    </div>    
                {/* </div> */}
            </div>
        </nav>
    )
}


export { ExamNavbar, ConductedNavbar, NonConductedNavbar, ExamNavbar1 }
