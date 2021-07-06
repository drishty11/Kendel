import React, { useState } from "react";
import Navbar  from '../../Components/Navbar/Navbar';
import frame from '../../images/Frame 28.png';
import { Classes1All, Students1All, Exams1All } from '../../images/Icons/icons';
import ChatBoxbutton from "../../Components/ChatPopup/ChatPopup";
import DataTables from "../../Components/DataTables/DataTables";
import "./Dashboard.css";

export default function Dashboard({ sidebarOpen, toggleSidebar }) {

  const [changeData, setChangeData] = useState('My Classes');
  const data = [
    {
      id: 1,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "12",
    },
    {
      id: 2,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "12",
    },
    {
      id: 3,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "12",
    },
    {
      id: 4,
      ClassName: "kendel",
      Class: "12",
      Subject: "Physics",
      Teacher: "Anjali",
      NumberOfStudents: "12",
    },
  ];

  const data1 = [
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
      <div id="dashboard" className={`container-fluid px-4 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
        <div className="dashboardintro pt-4 px-4 mt-5 d-flex flex-column flex-lg-row justify-content-end text-center mb-4">
          <div className="media-body d-lg-flex  text-black text-left">
            <div>
              <h4 className="mt-0 mb-3 third-text">Welcome back Anjali!</h4>
              <p className="h5 mb-0">
                You can check your today's task in your task bar
              </p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <img src={frame} width="300" alt="student" className="image" />
            </div>
          </div>
        </div>
        <div className="row g-3 my-2">
          <div className="col-md-6 col-xl-3">
            <div className=" board p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons">
                <Classes1All />
              </div>
              <div>
                <h5 className="h5 other-text">Total Classes</h5>
                <p className="fs-5 third-text">10</p>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-xl-3">
            <div className="p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons">
                <Students1All />
              </div>
              <div>
                <h5 className="h5 other-text">Total Students</h5>
                <p className="fs-5 third-text">10</p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div className="board p-3 shadow-sm d-flex justify-content-around align-items-center rounded mb-3 content-bg">
              <div className="d-flex justify-content-center align-items-center circle rounded-full icons">
                <Exams1All />
              </div>
              <div>
                <h5 className="h5 other-text">Total Exams</h5>
                <p className="fs-5 third-text">10</p>
              </div>
            </div>
          </div>
        </div>
        <div className="dataTable d-flex flex-column overflow-hidden">
          <div className="">
            <div className="button-section d-flex flex-row align-items-center secondary-bg overflow-hidden">
              <button className={`${changeData === 'My Classes' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mr-3 ml-3 button-div`} onClick={() => setChangeData('My Classes')}>
                My Classes
              </button>
              <button className={`${changeData === 'Exams' ? 'changeTab text-white' : 'bg-white border-0 other-text' } d-flex justify-content-center align-items-center mr-3 ml-3 button-div`} onClick={() => setChangeData('Exams')}>
                Exams
              </button>
            </div>
            {changeData === 'My Classes' ? <DataTables data={data} changeData={changeData} /> : <DataTables data = {data1} changeData={changeData} />}

            {/* <table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th>ClassName</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Teacher</th>
                  <th>Number Of Students</th>
                </tr>
              </thead>
              <tbody>
                {(changeData === 'My Classes' ? data : data1).map((info, index) => {
                  return (
                    <tr key={index}>
                      <td>{info.id}</td>
                      <td>{info.ClassName}</td>
                      <td>{info.Class}</td>
                      <td>{info.Subject}</td>
                     <td>{info.Teacher}</td>
                     <td>{info.NumberOfStudents}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table> */}
            <ChatBoxbutton />
          </div>
        </div>
      </div>
    </div>
  );
}
