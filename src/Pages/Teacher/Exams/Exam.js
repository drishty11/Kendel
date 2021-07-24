import React, { useState } from 'react';
import Navbar  from '../../../Components/Navbar/Navbar';
import { Frame29, Addition } from '../../../images/Icons/icons';
import { SharedDropdown, DraftedDropdown, ConductedDropdown } from '../../../Components/TeacherDropdown/TeacherDropdown';
import { Link,Route } from 'react-router-dom';
import './Exam.css';
import ExamModal from '../../../Components/ExamModal/ExamDetails/ExamDetails';
import CreateExam from './CreateExam/CreateExam';
import Conducted from '../Exams/ConductedExam/Conducted';
import NonConducted from '../Exams/NonConductedExam/NonConducted';
// import ExamName from '../../../Components/ExamModal/ExamName/ExamName';
// import ResultInfo from '../../../Components/ExamModal/ResultInfo/ResultInfo';

function Exam({toggleSidebar,sidebarOpen, show }) {

    const [ examtab, setExamtab ] = useState('Shared');
    // const [Conduct,  setConduct] = useState('conduct');
    const [ editModal, setEditModal ] = useState(false);
    const toggleEditModal = () => {
        setEditModal(!editModal);
    }

    const sharedExams = [
        {
            name: 'Electromagnetism',
            date: '2021-07-25',
            time: '20:00',   
        },
        {
            name: 'Electromagnetism',
            date: '2021-07-03',
            time: '07:25',   
        },
        {
            name: 'Electromagnetism',
            date: '2021-07-25',
            time: '20:00',   
        },
        {
            name: 'Electromagnetism',
            date: '2021-07-03',
            time: '07:25',   
        },
        {
            name: 'Electromagnetism',
            date: '2021-07-16',
            time: '20:00',   
        },
       
    ]
    const DraftedExams = [
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
            
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
        {
            name: 'Electromagnetism Work',
            created: 'Created: 2021-06-30',
        },
    ]
    var today = new Date();
    var todayDate = today.toISOString().slice(0, 10);
    var CurrentTime = today.getHours() + ':' + today.getMinutes();
    return (
    
        <div id="page-content-wrapper">
        <div className={`${editModal ? 'exam-background' : '' } w-100 position-fixed`}></div>
            <div className="d-flex justify-content-center align-items-center">
                <ExamModal show={editModal} close={toggleEditModal} />    
            </div>
       
        <Navbar title={'Exams'} toggleSidebar={toggleSidebar} />
            <nav className="Exam-breadcrumb position-fixed d-flex">
                <ol className="d-flex flex-row align-items-center mb-0 flex-wrap pl-2">
                    <div>
                        <button className={`${examtab === "Shared" ? "exam-header font-weight-bold" : "opacity-3 border-0 exam-disable"} bg-transparent p-2 p-md-3 mt-2 mx-4 other-text h6 mb-0`} onClick={() => setExamtab('Shared')}><h5 className="mb-0">Shared</h5></button>
                        <button className={`${examtab === "Drafted" ? "exam-header font-weight-bold" : "opacity-3 border-0 exam-disable"} bg-transparent p-2 p-md-3 mt-2 mx-4 other-text h6 mb-0`} onClick={() => setExamtab('Drafted')}><h5 className="mb-0">Drafted</h5></button>
                    </div>
                </ol>
            </nav>
            <button className="position-fixed upload-btn d-flex align-items-center text-white text-decoration-none" onClick={() => toggleEditModal()}><Addition height="18px" width="18px" /><span className="d-none d-md-block ml-2">Create Exam</span></button>
            <div id="AllExams" className={`container-fluid px-4 pt-5 mt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    {examtab === 'Shared' ? sharedExams.map((exam,index) => {
                    let conducted = exam.date < todayDate ? true : (exam.date === todayDate && exam.time <= CurrentTime) ? true : false
                 
                    return (
                        <>
                        {conducted ? 
                        <Link to="/exam/conducted" key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                            <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                                <div className="d-flex flex-row justify-content-between align-items-center">
                                    <div className="d-flex justify-content-center align-items-center noteIcon mr-4" style= {{background: 'rgba(131, 131, 131, 0.7)'}} >
                                        <Frame29 />
                                     </div>
                                    <button to="/exam/conducted" className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text pointer border-0 bg-white">
                                        <h6>{exam.name}</h6>
                                        <p className="mb-0 mr-2" style={{color: 'rgba(131, 131, 131, 0.7)'}}>Conducted</p>
                                    </button>
                                </div>
                                <div className="position-relative">
                                    <ConductedDropdown />
                                </div>
                            </div>       
                        </Link> : 
                        <Link to="/exam/nonconducted" key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                        <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <div className="d-flex justify-content-center align-items-center noteIcon mr-4" >
                                    <Frame29 />
                                 </div>
                                <button className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text pointer border-0 bg-white" >
                                    <h6>{exam.name}</h6>
                                    <div className="d-flex flex-row align-items-center" style={{ color: '#838383'}}>
                                        <p className="mb-0 mr-2">{exam.date}</p>
                                        <p className="mb-0">{exam.time}</p> 
                                    </div>
                                </button>
                            </div>
                            <div className="position-relative">
                                <SharedDropdown />
                            </div>
                        </div>       
                    </Link>
                        }
                    </>
                    )                    
                }) : ''}
                {examtab === 'Drafted' ? DraftedExams.map((exam,index) => {
                return (
                    <div key={index} className="d-flex justify-content-between align-items-center p-3 notes text-decoration-none other-text bg-white cursor-pointer mb-4">
                        <div className="d-flex flex-row w-100 align-items-center justify-content-between">
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <div className="d-flex justify-content-center align-items-center noteIcon mr-4">
                                    <Frame29 />
                                 </div>
                                <Link to="" className="d-flex flex-column justify-content-center align-items-start text-decoration-none other-text pointer">
                                    <h6>{exam.name}</h6>
                                    <div className="d-flex flex-row align-items-center" style={{ color: '#838383'}}>
                                        <p className="mb-0 mr-2">{exam.created}</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="position-relative">
                               <DraftedDropdown />
                            </div>
                        </div>    
                    </div>
                )
            }) : ''}
                    
                </div>
            </div>
        </div>         
      
    )
} 
export default Exam;