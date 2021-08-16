import React, { useState } from "react";
import { Cross } from "../../../images/Icons/icons";
import { Link } from "react-router-dom";
import calender from "../../../images/calendar.png";
import "./ExamDetails.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import CreateExam from "../../../Pages/Teacher/Exams/CreateExam/CreateExam";
// import Exam from "../../../Pages/Teacher/Exams/Exam";

export default function ExamDetails({ show, close}) {
  const [createExam, setCreateExam] = useState(false);
  const [startDate, setStartDate] = useState();
  // const [isOpen, setIsOpen] = useState(false);
  const [date,setdate] = useState(new Date());
  const handleChange = (d) => {
    // setIsOpen(!isOpen);
    const newDate =  (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear()+ ' ' + d.getHours() + ':' + d.getMinutes();
    console.log(newDate);
    setStartDate(newDate);
    setdate(d);
  };
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsOpen(!isOpen);
  // };

  const CalenderStart = React.forwardRef(({ value, onClick }, ref) => (
      <div type="text" id="" name="" placeholder="" onClick={onClick} ref={ref} className="position-absolute example-custom-input" style={{top: '-15px', right: '1px'}}>
        <img src={calender} alt="calender" width="16" height="16" className="calender mr-3" style={{cursor: 'pointer'}}  />
      </div>
  ));
  const CalenderEnd = React.forwardRef(({ value, onClick }, ref) => (
      <div type="text" id="" name="" placeholder="" onClick={onClick} ref={ref} className="position-absolute example-custom-input" style={{top: '-15px', right: '1px'}}>
        <img src={calender} alt="calender" width="16" height="16" className="calender mr-3" style={{cursor: 'pointer'}}  />
      </div>
  ));
  return (
    <>
      {show ? (
        <div
          className="d-flex flex-column examModal position-absolute bg-white"
          id="examModal"
        >
          <div className="d-flex flex-row px-4 pt-2 justify-content-between align-items-center">
            <h6 className="mb-0">Exams Details</h6>
            <button className="border-0 bg-white" onClick={close}>
              <Cross />
            </button>
          </div>
          <hr style={{ margin: "0.5rem 0" }} />
          <form className="px-4 pb-3 pt-3">
            <div className="d-flex flex-column">
              <label for="classname">Exam Name:</label>
              <input
                type="text"
                id="classname"
                name="classname"
                placeholder="Enter Class Name"
                className="px-3 py-2"
              />
            </div>
            <div>
              <label for="">Select Class:</label>
              <div className="d-flex flex-row position-relative">
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="--Select--"
                  className="px-3 py-2 w-100"
                />
                <svg
                  width="18"
                  height="18"
                  className="position-absolute calender mr-3"
                  style={{ color: "#A6ABBD" }}
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M256 309.145L100.533 144.111C90.3456 133.296 73.8283 133.296 63.6407 144.111C53.4531 154.925 53.4531 172.459 63.6407 183.274L237.554 367.889C242.648 373.296 249.324 376 256 376C262.676 376 269.352 373.296 274.446 367.889L448.359 183.274C458.547 172.459 458.547 154.925 448.359 144.111C438.172 133.296 421.654 133.296 411.467 144.111L256 309.145Z"
                    fill="#011B53"
                  />
                </svg>
              </div>
            </div>
            <div className="d-flex flex-column ">
              <label for="addsubject">Add Subjects:</label>
              <input
                type="text"
                id="addsubject"
                name="addsubject"
                placeholder="Type Subjects..."
                className="px-3 py-2"
              />
            </div>
            <div className="d-flex flex-column">
              <label for="maxmarks">Max Marks:</label>
              <input
                type="text"
                id="maxmarks"
                name="maxmarks"
                placeholder="Type Subjects..."
                className="px-3 py-2"
              />
            </div>
            <div>
              <label for="">Start date & time:</label>
              <div className="d-flex flex-row position-relative examdetailstartcalender">
               <input type="text" id="calender" name="calender" value={startDate} placeholder="Choose Start date & time" style={{cursor: 'pointer'}} className="w-100 px-3 py-2" />
                <DatePicker
                  placeholderText="Choose Start date & time"
                  className=""
                  selected={date}
                  customInput={<CalenderStart />}
                  onChange={handleChange}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
              </div>
            </div>
            <div>
              <label for="">Start date & time:</label>
              <div className="d-flex flex-row position-relative examdetailendcalender">
                <input type="text" id="calender" name="calender" value={startDate} placeholder="Choose Start date & time" style={{cursor: 'pointer'}} className="w-100 px-3 py-2" />
                <DatePicker
                  placeholderText="Choose Start date & time"
                  className=""
                  selected={date}
                  customInput={<CalenderEnd />}
                  onChange={handleChange}
                  timeInputLabel="Time:"
                  dateFormat="MM/dd/yyyy h:mm aa"
                  showTimeInput
                />
              </div>
            </div>
            <div className="d-flex flex-column">
              <label for="">Exam Description:</label>
              <textarea
                id=""
                name=""
                rows={3}
                placeholder="Add Exam Description"
                className="px-3 py-2"
              />
            </div>
            <div className="d-flex flex-column">
              <label for="">Instructions for Students:</label>
              <textarea
                id=""
                name=""
                rows={3}
                placeholder="Add Exam Description"
                className="px-3 py-2"
              />
            </div>
            <div className="d-flex flex-row justify-content-between align-items-center mb-4">
              <p className="mb-0 marking mt-1">Marking:</p>
              <label className="main d-flex flex-row justify-content-between align-items-center mb-0 pb-0">
                <span className="mt-2" style={{ color: "#838383" }}>
                  Manual
                </span>
                <input type="checkbox" className="mr-2 input" />
                <span className="geekmark mt-2"></span>
              </label>
              <label className="main d-flex flex-row justify-content-center align-items-center mb-0 pb-0">
                <span className="mt-2" style={{ color: "#838383" }}>
                  Automatic
                </span>
                <input type="checkbox" className="mr-2 input" />
                <span className="geekmark mt-2"></span>
              </label>
            </div>
            <div className="d-flex flex-row justify-content-around align-items-center mb-4 button-sec">
              <button type="button" className="button-div other-text bg-white">
                Reset
              </button>      
              <Link to="/exam/createxam"
                type="button"
                className="button-div blue-bg text-white text-decoration-none d-flex justify-content-center align-items-center"
                onClick={() => {setCreateExam(!createExam)}}>
                Save
              </Link>
            </div>
          </form>
        </div>
      ) : (
        ""
      )}
      
    </>
  );
}
