import React, { useState } from "react";
import ThreedotsStudent from "../../Components/ThreedotsStudent/ThreedotsStudent";
import { IoIosAdd } from "react-icons/all";
import images from "../../images/userimg.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import logo from "../../images/logo.png";
import frame from "../../images/Frame 28.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Navbar from "../../Components/Navbar/Navbar";
import Addstudent from "../../Components/Addstudent/Addstudent";

import "./student.css";

export default function Student({ sidebarOpen, toggleSidebar }) {
  const studentData = [
    {
      id: 1,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 2,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 3,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 4,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 5,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 6,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 7,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
    {
      id: 8,
      Name: "Mayra",
      Email: "abc@gmail.com",
      Mobile: "+919745743846",
      
      icon: <ThreedotsStudent />,
    },
  ];


  const [addstudent, setAddstudent] = useState(false);
  const[selectclass, setSelectclass]= useState('--Select Class--');
  const handleChange=(e)=>{
    const viewclass = e.target.value ;
    console.log(viewclass);
    setSelectclass(viewclass)}

  return (
    <div id="page-content-wrapper">
      <Navbar title={"Student"} toggleSidebar={toggleSidebar} />

      <div
        id="student"
        className={`container-fluid px-4 pt-5 ${
          sidebarOpen ? "sidebarActive" : ""
        }`}
      >
        <div
          className="row g-3 my-2 mt-2"
          style={{ backgroundColor: "rgba(189, 195, 199, 0.1)" }}
        >
          <div className="container-fluid justify-content-between  d-flex  px-4 pt-3 ">
            <button
              type="button"
              data-toggle="modal"
              data-target="#exampleModalCenter7"
              className=" btn d-block d-sm-inline-block rounded-pill mr-2"
              style={{
                fontSize: "13px",
                backgroundColor: "#EA4444",
                width: "120px",
                border: " 1px solid #EA4444",
                borderRadius: "20px",
                boxShadow: "0px 8px 20px rgba(27, 38, 59, 0.15)",
                color: "#fff",
              }}
              onClick={() => setAddstudent(true)}
            >
              <IoIosAdd />
              Add Students
            </button>
            <Addstudent
              className="d-flex justify-content-center align-content-center"
              onClose={() => setAddstudent(false)}
              addstudent={addstudent}
            />
            <div className="d-flex justify-content-lg-start mrs" >
              <select onChange={handleChange} className="form-select rounded-pill  " aria-label="Default select " style={{color:"#011B53", boxShadow:'none', outline:'none'}}>
                <option selected >--Select Class--</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
            </div>



            <div className="d-flex justify-content-end ">
            <div className="dropdown hid">
                <button
                  className="ml-3 mb-1 btn  rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{background:' #FFFFFF', boxShadow:' 0px 8px 20px rgba(43, 61, 94, 0.05)',color:' #011B53'}}
                >
                  Import <ExpandMoreIcon />
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Import PDF
                  </a>
                  <a class="dropdown-item" href="#">
                    Import Excel
                  </a>
                </div>
              </div>
              <div className="dropdown hid">
                <button
                  className="ml-3 mb-1 btn  rounded-pill"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{background:' #FFFFFF', boxShadow:' 0px 8px 20px rgba(43, 61, 94, 0.05)',color:' #011B53'}}
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
            <form className="ml-sm-2 " style={{marginTop:'-15px'}}>
            <div >
            <svg
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{position:"relative", top:"30px",left:"10px"}}
                >
                  <path
                    d="M4.79929 9.59901C5.90624 9.59406 6.97673 9.20282 7.82601 8.49281C7.83877 8.5162 7.85352 8.53845 7.87008 8.55931L11.1721 11.8615C11.264 11.951 11.3873 12.0008 11.5156 12C11.6438 11.9992 11.7665 11.9479 11.8572 11.8572C11.9479 11.7666 11.9992 11.6438 12 11.5156C12.0008 11.3874 11.9511 11.264 11.8616 11.1722L8.55942 7.87024C8.53859 7.85367 8.51637 7.83893 8.49302 7.82617C9.20276 6.97683 9.59377 5.90636 9.59858 4.79951C9.59858 3.85025 9.31711 2.92232 8.78975 2.13304C8.2624 1.34377 7.51286 0.728606 6.6359 0.365343C5.75894 0.00207956 4.79397 -0.0929666 3.863 0.0922233C2.93203 0.277413 2.07687 0.734522 1.40568 1.40574C0.734489 2.07697 0.277401 2.93216 0.0922192 3.86317C-0.0929625 4.79418 0.00207947 5.7592 0.365326 6.6362C0.728573 7.51319 1.34371 8.26277 2.13295 8.79015C2.92219 9.31752 3.85008 9.59901 4.79929 9.59901ZM4.79929 0.975153C5.55567 0.975133 6.29507 1.19942 6.92398 1.61965C7.5529 2.03988 8.04308 2.63717 8.33254 3.336C8.62201 4.03484 8.69775 4.80381 8.55019 5.54569C8.40263 6.28757 8.0384 6.96903 7.50356 7.5039C6.96872 8.03876 6.28729 8.40301 5.54544 8.55057C4.8036 8.69814 4.03466 8.62239 3.33586 8.33292C2.63706 8.04344 2.03979 7.55324 1.61958 6.92429C1.19937 6.29535 0.97509 5.55592 0.975109 4.79951C0.975109 3.78522 1.37801 2.81249 2.09519 2.09528C2.81236 1.37807 3.78506 0.975153 4.79929 0.975153Z"
                    fill="#BDC3C7"
                  />
                </svg>
                <input
                  type="text"
                  style={{
                    boxShadow: "none",
                    outline: "none",
                    paddingLeft: "27px",
                  }}
                  className="form-control rounded-pill"
                  placeholder="Search"
                />



            </div>

            </form>

              {/* <div
                className="form-group has-search  ml-sm-2"
                style={{ color: "rgba(189, 195, 199, 1)" }}
              >
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{position:"relative", top:"30px",left:"10px"}}
                >
                  <path
                    d="M4.79929 9.59901C5.90624 9.59406 6.97673 9.20282 7.82601 8.49281C7.83877 8.5162 7.85352 8.53845 7.87008 8.55931L11.1721 11.8615C11.264 11.951 11.3873 12.0008 11.5156 12C11.6438 11.9992 11.7665 11.9479 11.8572 11.8572C11.9479 11.7666 11.9992 11.6438 12 11.5156C12.0008 11.3874 11.9511 11.264 11.8616 11.1722L8.55942 7.87024C8.53859 7.85367 8.51637 7.83893 8.49302 7.82617C9.20276 6.97683 9.59377 5.90636 9.59858 4.79951C9.59858 3.85025 9.31711 2.92232 8.78975 2.13304C8.2624 1.34377 7.51286 0.728606 6.6359 0.365343C5.75894 0.00207956 4.79397 -0.0929666 3.863 0.0922233C2.93203 0.277413 2.07687 0.734522 1.40568 1.40574C0.734489 2.07697 0.277401 2.93216 0.0922192 3.86317C-0.0929625 4.79418 0.00207947 5.7592 0.365326 6.6362C0.728573 7.51319 1.34371 8.26277 2.13295 8.79015C2.92219 9.31752 3.85008 9.59901 4.79929 9.59901ZM4.79929 0.975153C5.55567 0.975133 6.29507 1.19942 6.92398 1.61965C7.5529 2.03988 8.04308 2.63717 8.33254 3.336C8.62201 4.03484 8.69775 4.80381 8.55019 5.54569C8.40263 6.28757 8.0384 6.96903 7.50356 7.5039C6.96872 8.03876 6.28729 8.40301 5.54544 8.55057C4.8036 8.69814 4.03466 8.62239 3.33586 8.33292C2.63706 8.04344 2.03979 7.55324 1.61958 6.92429C1.19937 6.29535 0.97509 5.55592 0.975109 4.79951C0.975109 3.78522 1.37801 2.81249 2.09519 2.09528C2.81236 1.37807 3.78506 0.975153 4.79929 0.975153Z"
                    fill="#BDC3C7"
                  />
                </svg>

                <input
                  type="text"
                  style={{
                    boxShadow: "none",
                    outline: "none",
                    paddingLeft: "32px",
                  }}
                  className="form-control rounded-pill"
                  placeholder="Search"
                />
              </div> */}
            </div>
          </div>

          <div className="table overflow-auto  d-flex flex-column " >

        <table >
          <thead
            style={{
              background: 'rgba(189, 195, 199, 0.5)',

              color: "#011B53",
            }}
          >
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Email ID</th>
              <th>Mobile No.</th>

              <th></th>
            </tr>
          </thead>
          <tbody
            style={{
              color: "rgba(1, 27, 83, 1)",
              background: "rgba(255, 255, 255, 1)",
            }}
          >
          {selectclass==='10th'? studentData.map((staff, index) => {
              return (
                <tr key={index}>
                  <td>{staff.id}</td>
                  <td>{staff.Name}</td>
                  <td>{staff.Email}</td>
                  <td>{staff.Mobile}</td>
                  <td>{staff.icon}</td>
                </tr>
              );
            }):" "}
               </tbody>
        </table>
      </div>
        
        </div>
      </div>
    </div>
  );
}
