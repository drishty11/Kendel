import React ,{useState} from "react";
import { Classes1All, Students1All, Exams1All } from '../../images/Icons/icons';
import frame from '../../images/Frame 28.png';
import InstituteTables from "../../Components/InstituteTable/InstituteTable";
import "./Dashboard.css";
import Navbar from "../../Components/Navbar/Navbar";

export default function Dashboard1({ sidebarOpen, toggleSidebar }) {
  const [changeData, setChangeData] = useState('Classes');
  const data1 = [
    {
      id: 1,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "50",
    },
    {
      id: 2,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "50",
    },
    {
      id: 3,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "50",
    },
    {
      id: 4,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "50",
    },
  ];
  const data = [
    {
      id: 1,
      ExamName: "kendel",
      Class: "12",
      Subject: "Physics",
      StartDate: "10:00 AM -  11:00 AM",
      EndDate: "10:00 AM -  11:00 AM",
    },
    {
      id: 2,
      ExamName: "kendel",
      Class: "12",
      Subject: "Physics",
      StartDate: "10:00 AM -  11:00 AM",
      EndDate: "10:00 AM -  11:00 AM",
    },
    {
      id: 3,
      ExamName: "kendel",
      Class: "12",
      Subject: "Physics",
      StartDate: "10:00 AM -  11:00 AM",
      EndDate: "10:00 AM -  11:00 AM",
    },
    {
      id: 4,
      ExamName: "kendel",
      Class: "12",
      Subject: "Physics",
      StartDate: "10:00 AM -  11:00 AM",
      EndDate: "10:00 AM -  11:00 AM",
    },
  ];


  return (
    <div id="page-content-wrapper">
     <Navbar title={'Dashboard'} toggleSidebar={toggleSidebar} />      
      <div id="instituedashboard" className={`container-fluid pl-4 pr-4 pr-lg-5 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
        <div className="intro pt-4 px-4 mt-5 d-flex flex-column flex-lg-row justify-content-end text-center mb-4">
          <div className="media-body d-lg-flex text-black text-left">
            <div>
              <h4 className="mt-0 mb-3 third-text">Welcome back Anjali!</h4>
              <p className="h6 mb-0">
                You can check your today's task in your task bar
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={frame} width="300" alt="student" className="image" />
            </div>
          </div>
        </div>
        <div className="d-flex flex-row my-2 flex-wrap">
          <div className="board w-100 d-flex flex-row mr-xl-5 mr-md-4 mr-sm-0">
            <div className="w-100 p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons mr-3">
                <Classes1All />
              </div>
              <div>
                <h6 className="other-text">Total Classes</h6>
                <h6 className="fs-5 third-text mb-0">10</h6>
              </div>
            </div>
          </div>
          <div className="board w-100 d-flex flex-row mr-xl-5 mr-md-4 mr-sm-0">
            <div className="w-100 p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons mr-3">
                <Students1All />
              </div>
              <div>
                <h6 className="other-text">Total Students</h6>
                <h6 className="fs-5 third-text mb-0">10</h6>
              </div>
            </div>
          </div>
          <div className="board w-100 d-flex flex-row mr-xl-5 mr-md-4 mr-sm-0">
            <div className="w-100 p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons mr-3">
                <Exams1All />
              </div>
              <div>
                <h6 className="other-text">Total Teachers</h6>
                <h6 className="fs-5 third-text mb-0">10</h6>
              </div>
            </div>
          </div>
          <div className="board w-100 d-flex flex-row mr-xl-5 mr-md-4 mr-sm-0">
            <div className="w-100 p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons mr-3">
                <Students1All />
              </div>
              <div>
                <h6 className="other-text">Total Exams</h6>
                <h6 className="fs-5 third-text mb-0">10</h6>
              </div>
            </div>
          </div>
        </div>
        
            <div className="dataTable d-flex flex-column overflow-hidden">
          <div className="">
            <div className="button-section d-flex flex-row align-items-center secondary-bg overflow">
              <button className={`${changeData === 'Classes' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mx-md-3 mx-1 button-div`} onClick={() => setChangeData('Classes')}>
                 Classes
              </button>
              <button className={`${changeData === 'Teachers' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mx-md-3 mx-1 button-div`} onClick={() => setChangeData('Teachers')}>
                Teachers
              </button>
              <button className={`${changeData === 'Students' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mx-md-3 mx-1 button-div`} onClick={() => setChangeData('Students')}>
                Students
              </button>
              <button className={`${changeData === 'Exams' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mx-md-3 mx-1 button-div`} onClick={() => setChangeData('Exams')}>
                Exams
              </button>

            </div>
            {changeData === 'Classes' ? <InstituteTables data = {data} changeData={changeData} />: <InstituteTables data={data1} changeData={changeData} />}
            

          </div>
        </div>
  
          </div>
        </div>
    
  );
}