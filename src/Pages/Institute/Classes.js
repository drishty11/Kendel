import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import Table from 'react-bootstrap/Table';
import images1 from '../../images/jess-bailey-HyoRyMAVpNA-unsplash.jpg';
import { ThreeDot } from '../../images/Icons/icons';
import Navbar from "../../Components/Navbar/Navbar";
import CreateClass from "../../Components/CreateClass/createclass";
import Filterclass from "../../Components/Filterclass/filterclass";
import ThreeDotsdrop from "../../Components/ClassThreedots/threedotsDropdown";
import {
  AiOutlineAlignRight,
  IoNotificationsOutline,
  BiUser,
  IoIosAdd,
  FiLogOut,
} from "react-icons/all";

import "./Classes.css";
const Classes1 = ({ sidebarOpen, toggleSidebar }) => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState(false);
  const[back,setBack]=useState("");
   return (
    <div id="page-content-wrapper" style={{background:' rgba(189, 195, 199, 0.1)'}} >
        <Navbar title={'Classes'} toggleSidebar={toggleSidebar} />
        <div id="classes" className={`container-fluid pl-4 pr-4 pr-lg-5 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
        <div className="row">
      <div className="container-fluid body-class d-flex justify-content-between all-header-btn pt-2" style={{margin: '40px 0 0 0'}}>
        <button type="button" data-toggle="modal" data-target="#exampleModalCenter2"
          className="btn mr-sm-2 text-white classes-btn rounded-pill"
          onClick={() => setShow(true)}
          style={{background:' #EA4444',border: '1px solid #EA4444',boxShadow: '0px 8px 20px rgba(27, 38, 59, 0.15)'}}
        >
          <IoIosAdd className="mr-2 font-weight-bold text-white" />
          Create Class
        </button>
        <CreateClass
          className="d-flex justify-content-center align-content-center"
          onClose={() => setShow(false)}
          show={show}
        />

        <div className="d-flex justify-content-md-center classesdroping-down">
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
              <a class="dropdown-item" href="#">
                Export PDF
              </a>
              <a class="dropdown-item" href="#">
                Export Excel
              </a>
            </div>
          </div>

         
        </div>
      </div>

      <div className="table overflow-auto sliding-d" style={{ color: "rgba(1, 27, 83, 1)" }}>
        <table className="classtable">
          <thead style={{ background: " rgba(189, 195, 199, 0.5)" }}>
            <tr style={{ color: "rgba(1, 27, 83, 1)" }}>
              <th>Sr. No.</th>
              <th>Class Name </th>
              <th>Subject</th>
              <th>Lecture Timing</th>
              <th>Teacher Assigned</th>
              <th>Total students Assigned</th>
              <th> </th>
            </tr>
          </thead>
          <tbody style={{ background: "rgba(255, 255, 255, 1)" }}>
            <tr>
              <td>1</td>
              <td>+2 Non Medical</td>
              <td> Physics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td>50</td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Chemistry</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Mathematics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>English</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Computer</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td>+2 Non Medical</td>
              <td> Physics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td>50</td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Chemistry</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>+2 Non Medical</td>
              <td> Physics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td>50</td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>Chemistry</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Mathematics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>English</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Computer</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>+2 Non Medical</td>
              <td> Physics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td>50</td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Chemistry</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Mathematics</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>

            <tr>
              <td></td>
              <td></td>
              <td>English</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Computer</td>
              <td>9:00AM - 10:00AM</td>
              <td>Anjali Doda</td>
              <td></td>
              <td>
                <ThreeDotsdrop />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      </div>
    </div>
    </div>
  );
};
export default Classes1;
