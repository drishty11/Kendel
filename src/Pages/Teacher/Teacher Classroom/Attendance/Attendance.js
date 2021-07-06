import React, {useState} from "react";
import BreadCrumbs from "../../../../Components/BreadCrumbs/BreadCrumbs";
import Navbar from "../../../../Components/Navbar/Navbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Statustoggler from '../../../../Components/Statustoggler/Statustoggler';

export default function Attendance({ toggleSidebar, sidebarOpen }) {
  const breadcrumbPath = [
    { to: "/classes", label: "Classes" },
    { to: "/classes/classroom", label: "Class Name" },
    { to: "/classes/classroom/people", label: "People" },
    {
      to: "/classes/classroom/people/attendancerecord",
      label: "Student Attendance",
    },
  ];

  const[date, setDate]=useState('');

  const StudentAttendancedata = [
    {
      id: 1,
      TeacherName: "Anjali Doda",
      status : <Statustoggler/>  
    },
    {
        id: 2,
        TeacherName: "Anjali Doda",
        status : <Statustoggler/>
      },
      {
        id: 3,
        TeacherName: "Anjali Doda",
        status : <Statustoggler/>
      },
      {
        id: 4,
        TeacherName: "Anjali Doda",
        status : <Statustoggler/>
      },
      {
        id: 5,
        TeacherName: "Anjali Doda",
        status : <Statustoggler/>
      },
      {
        id: 6,
        TeacherName: "Anjali Doda",
        status : <Statustoggler/>
      },
    
    
  ];
  return (
    <div id="page-content-wrapper">
      <Navbar title={"People"} toggleSidebar={toggleSidebar} />
      <BreadCrumbs crumbs={breadcrumbPath} />
      <div
        id="attendance"
        className={`container-fluid px-4 pt-5 mt-5 ${
          sidebarOpen ? "sidebarActive" : ""
        }`}
      >
        <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
        <div className="d-flex justify-content-end ">
              <div className="d-flex justify-content-end ">
                
              </div>
              <div className="dropdown d-flex">
                <button
                  className="ml-3 mb-1 btn  rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{background:' #FFFFFF', boxShadow:' 0px 8px 20px rgba(43, 61, 94, 0.05)', color:' #011B53'}}
                >
                  Export <ExpandMoreIcon />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a href="/" class="dropdown-item">
                    Export PDF
                  </a>
                  <a href="/" class="dropdown-item">
                    Export Excel
                  </a>
                </div>
              </div>

              {/* <div className="form-group has-search  ml-sm-2"style={{color: 'rgba(189, 195, 199, 1)'}}>
                   
                  <i className="material-icons-outlined"></i>
                  <span class="fa fa-search form-control-feedback"></span>
                  <input
                    type="text"
                    class="form-control  rounded-pill"
                    placeholder="Search"
                  />
                </div> */}
            </div>
          </div>

          <div className="table overflow-auto d-flex flex-column ">
          <table >
          <thead
            style={{
              background: 'rgba(189, 195, 199, 0.5)',

              color: "#011B53",
            }}
          >
            <tr>
              <th>Sr.No.</th>
              <th>Student Name</th>

              <th>Status</th>


              
            </tr>
          </thead>
          <tbody
            style={{
              color: "rgba(1, 27, 83, 1)",
              background: "rgba(255, 255, 255, 1)",
            }}
          >
          
          {date ==='2021-05-30' ? StudentAttendancedata.map((staff, index) => {
              return (
                <tr key={index}>
                  <td>{staff.id}</td>
                  <td>{staff.TeacherName}</td>
                  <td>{staff.status}</td>

                </tr>
              );
            }):" "}
               </tbody>
        </table>
          </div>
        </div>
        </div>
  );
}
