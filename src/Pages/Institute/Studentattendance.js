import React,{useState} from "react";
import Navbar from "../../Components/Navbar/Navbar";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Statustoggler from '../../Components/Statustoggler/Statustoggler';
import './Teacherattendance.css';
export default function Studentattendance({ sidebarOpen, toggleSidebar }) {
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
          {
            id: 7,
            TeacherName: "Anjali Doda",
            status : <Statustoggler/>
            
  
          },
          {
            id: 8,
            TeacherName: "Anjali Doda",
            status : <Statustoggler/>
            
  
          },
        
      ];
    
    const[date, setDate]=useState('');
    const[classname,setClassname]= useState('');
    const [subject,setSubject]= useState('');

    const handleChangeDate =(e)=>{
        const newdate= e.target.value;
        console.log(newdate);
        setDate(newdate);
    }
    const handleChangeClass =(e)=>{
        const newclass= e.target.value;
        console.log(newclass);
        setDate(newclass);
    }
    const handleChangeSubject =(e)=>{
        const newsubject= e.target.value;
        console.log(newsubject);
        setDate(newsubject);
    }
  return (
    <div id="page-content-wrapper">
      <Navbar title={"Student Attendance"} toggleSidebar={toggleSidebar} />

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

            <div className=" d-flex justify-content-lg-start">
            <div className=" d-flex align-item-center">
              
                
                <input onChange={handleChangeDate} className="mr-2 rounded-pill" type="date" style={{background: '#FFFFFF', boxShadow:' 0px 8px 20px rgba(1, 27, 83, 0.05)'}}  placeholder="Date"  />
                <select onChange={handleChangeClass} className="form-select rounded-pill  " aria-label="Default select ">
                <option selected >12th Class</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
                <option value="9th">9th</option>
                <option value="10th">10th</option>
                <option value="11th">11th</option>
                <option value="12th">12th</option>
              </select>
              <select onChange={handleChangeSubject} className="form-select rounded-pill ml-2 " aria-label="Default select ">
                <option selected >Physics</option>
                <option value="Physics">Physics</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Mathematics">Mathematics</option>
                <option value="English">English</option>

              </select>
            
            
            </div>
            </div>

            {/* <button type="button" data-toggle="modal" data-target="#exampleModalCenter"
          style={{fontSize:"0.9rem",backgroundColor:"#EA4444", boxShadow:"0px 8px 20px rgba(27, 38, 59, 0.15)"}}
            className="mb-1 btn text-white rounded-pill "
            onClick={() => setShow(true)}
          >
            <IoIosAdd />
            Add Teacher
           
          </button> */}

            <div className="d-flex justify-content-end ">
              <div className="d-flex justify-content-end ">
                <form style={{marginTop:'-15px'}}>
                  <div>
                    <svg 
                      width="14"
                      height="14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "relative",
                        top: "30px",
                        left: "10px",
                      }}
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
                  </div>
                </form>
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
            }): ''}
               </tbody>
        </table>
          </div>
        </div>
      </div>
    </div>
  );
}

