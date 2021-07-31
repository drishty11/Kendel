import React, {useState, useEffect} from "react";
import BreadCrumbs from "../../../../Components/BreadCrumbs/BreadCrumbs";
import Navbar from "../../../../Components/Navbar/Navbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import './Attendance.css';
import Toggle from "../../../../Components/Toggle/Toggle";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


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

  const[date, setDate]=useState('2021-05-30'); 
  const [startYear, setStartyear] = useState(new Date());


  const StudentAttendancedata = [
    {
      id: '1.',
      TeacherName: "Anjali Doda",
      status : <Toggle id='1' />
    },
    {
        id: '2.',
        TeacherName: "Anjali Doda",
        status : <Toggle id='2' />
      },
      {
        id: '3.',
        TeacherName: "Anjali Doda",
        status : <Toggle id='3' />
      },
      {
        id: '4.',
        TeacherName: "Anjali Doda",
        status : <Toggle id='4' />
      },
      {
        id: '5.',
        TeacherName: "Anjali Doda",
        status : <Toggle id='5' />
      },
      {
        id: '6.',
        TeacherName: "Anjali Doda",
        status : <Toggle id='6' />
      },
    
    
  ];
  return (
    <div id="page-content-wrapper">
      <Navbar title={"People"} toggleSidebar={toggleSidebar} />
      <BreadCrumbs crumbs={breadcrumbPath} />

      <div id="attendance" className={`container-fluid px-md-4 px-2 pt-5 mt-5 ${sidebarOpen ? "sidebarActive" : "" }`}>
          <div className="pt-md-2 pt-5 mt-5 mb-4">
              <div>
                <div className="dropdown d-flex flex-wrap align-items-center pb-3">
                  <div className="mb-2 mr-3">
                    <button type="button" className="mb-1 mr-3 btn rounded-pill export" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                    style={{background: '#FFFFFF', boxShadow: '0px 8px 20px rgba(43, 61, 94, 0.1)', borderRadius: '20px', color:' #011B53'}}>Export<ExpandMoreIcon /></button>
                      <div class="dropdown-menu options" aria-labelledby="dropdownMenuButton" style={{height: '86px'}}>
                        <a href="/" class="dropdown-item">Export PDF</a>
                        <a href="/" class="dropdown-item">Export Excel</a>
                      </div>
                  </div>
                  {/* <div>
                      <button type="button" className="ml-3 mb-1 btn rounded-pill export" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" 
                      style={{background: '#FFFFFF', boxShadow: '0px 8px 20px rgba(43, 61, 94, 0.1)', borderRadius: '20px', color:' #011B53'}}>Due Date and Time<ExpandMoreIcon /></button>
                  </div> */}
                  {/* <div className="d-flex flex-row"> */}
                    <div className="mr-3 mb-2">
                      <DatePicker className="attendaceDatepicker" selected={startYear} onChange={(date) => setStartyear(date)} showMonthYearPicker dateFormat="MMM" />
                    </div>
                    <div className="mr-4 mb-2">
                      <DatePicker className="attendaceDatepicker" selected={startYear} onChange={(date) => setStartyear(date)} showDatePicker dateFormat="dd" />
                    </div>
                    <div className="mr-4 mb-2">
                      <DatePicker className="attendaceDatepicker" selected={startYear} onChange={(date) => setStartyear(date)} showYearPicker dateFormat="yyyy" />
                    </div>
                  {/* </div> */}
                     
                </div>
              </div>
              <div className="table overflow-auto d-flex flex-column text-center" style={{border: '0.5px solid rgba(131, 131, 131, 0.5)', borderRadius: '8px'}}>
                <table>
                  <thead style={{background: 'rgba(189, 195, 199, 0.5)', color: "#011B53"}}>
                    <tr>
                      <th style={{fontWeight: '600'}}>Sr.No.</th>
                      <th style={{fontWeight: '600'}}>Student Name</th>
                      <th style={{fontWeight: '600'}}>Status</th> 
                    </tr>
                  </thead>
                  <tbody style={{color: "rgba(1, 27, 83, 1)", background: "rgba(255, 255, 255, 1)", }}>
                    {date ==='2021-05-30' ? StudentAttendancedata.map((staff, index) => {
                        return (
                          <tr key={index}>
                            <td>{staff.id}</td>
                            <td>{staff.TeacherName}</td>
                            <td>{staff.status}</td>
          
                          </tr>
                        );
                      }): '' }
                  </tbody>
                </table>
              </div>
          </div>
      </div>
    </div>
  );
}
