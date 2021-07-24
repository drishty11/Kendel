import React, { useState } from 'react';
import { RightArrow, Students1All, Add, Send, LeftArrow } from '../../images/Icons/icons';
import { MdEdit } from 'react-icons/all';
import './ExamNavbar.css';
import { Link } from 'react-router-dom';
import ExamName from '../ExamModal/ExamName/ExamName';
import Collaborator from '../ExamModal/Collaborator/Collaborator';



const NonConductedNavbar = ({setsave}) => {
    return (
        <nav className="Nav-Exam position-fixed d-flex">
            <div className="d-flex flex-row mb-0 flex-wrap pl-2"  style={{ width: '95%'}}>
                <div className="d-flex flex-row justify-content-around align-items-center" style={{ width: '400px'}}>
                    <LeftArrow />
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" onClick={setsave} style={{ width: '150px', height:'38px' }}>
                        <MdEdit className="mr-2" />
                        Edit Exam
                    </button>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '150px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                </div> 
            </div>
        </nav>
    )
}
const ConductedNavbar = () => {
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
        <nav className="Nav-Exam position-fixed d-flex">
            <div className="d-flex flex-row mb-0 flex-wrap pl-2"  style={{ width: '95%'}}>
                <div className="d-flex flex-row justify-content-around align-items-center" style={{ width: '400px'}}>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" onClick={() => setExamname(!examname)} style={{ width: '150px', height:'38px' }}>
                        Exam Details
                        <MdEdit className="ml-2" />
                    </button>
                    <Link to="/exam/conducted/studentwork" className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text text-decoration-none exam-btn" style={{ width: '150px', height:'38px' }}>
                        Student Work   
                    </Link>
                </div> 
            </div>
        </nav>
        </>
    )
}

const ExamNavbar1 = () => {
    return (
        <nav className="Nav-Exam position-fixed d-flex">
            <div className="d-flex flex-row justify-content-between align-items-center mb-0 flex-wrap pl-2"  style={{ width: '95%'}}>
                <div className="d-flex flex-row justify-content-around align-items-center">
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text ml-3 exam-btn" style={{ width: '150px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ width: '500px'}}>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '170px', height:'38px' }}>
                        <Students1All />
                        Collaborator
                    </button>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '110px', height:'38px' }}>
                        <Add />
                        Save
                    </button>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '110px', height:'38px' }}>
                        Share
                        <Send />
                    </button>
                </div>
            </div>
        </nav>
    )
}

const ExamNavbar = () => {

    const [collaborator,setCollaborator] = useState(false)

    return (
        <>
        <nav className="Nav-Exam position-fixed d-flex">
            <div className="d-flex flex-row justify-content-between align-items-center mb-0 flex-wrap pl-2"  style={{ width: '95%'}}>
                <div className="d-flex flex-row justify-content-around align-items-center" style={{ width: '400px'}}>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '150px', height:'38px' }}>
                        Exam Details
                        <RightArrow />
                    </button>
                    <button className="d-flex justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '130px', height:'38px' }}>Preview</button>
                </div>
                <div className="d-flex flex-row justify-content-between align-items-center" style={{ width: '500px'}}>
                    <div>
                        <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text position-relative exam-btn" onClick={() => setCollaborator(!collaborator)} style={{ width: '170px', height:'38px' }}>
                            <Students1All />
                            Collaborator
                        </button>
                        {collaborator ? <Collaborator close={() => setCollaborator(!collaborator)} /> : ''}
                    </div>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '110px', height:'38px' }}>
                        <Add />
                        Save
                    </button>
                    <button className="d-flex flex-row justify-content-center align-items-center border-0 bg-white other-text exam-btn" style={{ width: '110px', height:'38px' }}>
                        Share
                        <Send />
                    </button>
                </div>
            </div>
        </nav>
    </>
    )
}

export { ExamNavbar, ConductedNavbar, NonConductedNavbar, ExamNavbar1 }
