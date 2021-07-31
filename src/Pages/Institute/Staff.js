import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./Staff.css";
import ThreeDotsStaff from "../../Components/ThreedotsStaff/threedotsStaff";
import Navbar from "../../Components/Navbar/Navbar";
import Filterclass from "../../Components/Filterclass/filterclass";
import {
  BsThreeDotsVertical,
  IoNotificationsOutline,
  BiUser,
  FiLogOut,
  AiOutlineAlignRight,
  IoIosAdd,
} from "react-icons/all";
import Dropdown from "react-bootstrap/Dropdown";
import images from "../../images/userimg.jpg";
import TeacherNotification from "../../Components/TeacherNotification/TeacherNotification";
export default function Staff({  sidebarOpen, toggleSidebar  }) {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(false);
  const staffData = [
    {
      id: 1,
      Name: "Anjali Doda",
      Email: "anjali@gmail.com",
      Mobile: "+919745743846",
      Subjects: "Physics",
      Assigned: [
        {
          first: "10th Mathematics",
          second: "12th Physics",
          third: "12th Chemistry",
        },
      ],
      icon: <ThreeDotsStaff />,
    },
    {
      id: 2,
      Name: "Anjali Doda",
      Email: "anjali@gmail.com",
      Mobile: "+919745743846",
      Subjects: "Physics",
      Assigned: [
        {
          first: "10th Mathematics",
          second: "12th Physics",
          third: "12th Chemistry",
        },
      ],
      icon: <ThreeDotsStaff />,
    },
    {
      id: 3,
      Name: "Anjali Doda",
      Email: "anjali@gmail.com",
      Mobile: "+919745743846",
      Subjects: "Physics",
      Assigned: [
        {
          first: "10th Mathematics",
          second: "12th Physics",
          third: "12th Chemistry",
        },
      ],
      icon: <ThreeDotsStaff />,
    },
  ];

  return (
    <div id="page-content-wrapper" style={{background:' rgba(189, 195, 199, 0.1)'}}>
     <Navbar title={'Staff'} toggleSidebar={toggleSidebar} />
        <div id="staff" className={`container-fluid pl-4 pr-4 pr-lg-5 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
        <div className="row g-3 my-2 mt-2">
      
        <div className="container-fluid body-class d-flex justify-content-between all-header-btn pt-2" style={{margin: '30px 0 15px 0'}}>
        <button type="button" data-toggle="modal" data-target="#exampleModalCenter"
          className=" btn text-white classes-btn rounded-pill d-flex justify-content-center align-items-center"
          style={{fontSize:"13px",backgroundColor:"#EA4444",width:"120px",height: '45px',border:" 1px solid #EA4444", borderRadius :"20px", boxShadow:"0px 8px 20px rgba(27, 38, 59, 0.15)",color:"#fff"}}
          type="submit"
          onClick={() => setShow(true)} >
          <IoIosAdd size={20}  className="font-weight-bold text-white"/>
            Add Teacher
        </button>
        <TeacherNotification className="d-flex justify-content-center align-content-center" onClose={() => setShow(false)} show={show} />

        <div className="d-flex justify-content-md-center staffdroping-down">
          <button type="button" data-toggle="modal"   data-backdrop="false"   data-target="#exampleModalCenter3"
            className="ml-md-3 mr-2 btn classes-btn1 rounded-pill"
            onClick={() => setFilter(true)}
            style={{background:' #FFFFFF', boxShadow:' 0px 8px 20px rgba(43, 61, 94, 0.05)',color:' #011B53'}}
          >
            Filter <ExpandMoreIcon />
          </button>

          <Filterclass
            className="d-flex justify-content-center align-content-center"
            onClose={() => setFilter(false)}
            filter={filter}
          />
          

          <div className="dropdown ">
            <button
              className="ml-md-3 btn classes-btn1 rounded-pill"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              style={{background:' #FFFFFF', boxShadow:'0px 8px 20px rgba(43, 61, 94, 0.05)',color:' #011B53'}}
            >
              Export <ExpandMoreIcon />
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a class="dropdown-item" href="/">
                Export PDF
              </a>
              <a class="dropdown-item" href="/">
                Export Excel
              </a>
            </div>
          </div>

         
        </div>
      </div>

      <div className="table overflow-auto text-center sliding-d">
        <table className="stafftable">
          <thead
            style={{
              background: "rgba(189, 195, 199, 0.5)",
              color: "#011B53",
            border:' 0.5px solid #BDC3C7'
            }}
          >
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Mobile No.</th>
              <th>Subjects</th>
              <th>Classes Assigned</th>
              <th></th>
            </tr>
          </thead>
          <tbody
            style={{
              color: "rgba(1, 27, 83, 1)",
              background: "rgba(255, 255, 255, 1)",
            }}
          >
            {staffData.map((staff, index) => {
              return (
                <tr key={index}>
                  <td>{staff.id}</td>
                  <td>{staff.Name}</td>
                  <td>{staff.Email}</td>
                  <td>{staff.Mobile}</td>
                  <td>{staff.Subjects}</td>
                  <td>
                    {staff.Assigned.map((assign, index) => {
                      return (
                        <div key={index}>
                          <div>{assign.first}</div>
                          <div>{assign.second}</div>
                          <div>{assign.third}</div>
                        </div>
                      );
                    })}
                  </td>
                  <td>{staff.icon}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
    </div>
    </div>
  );
}
