import React, { useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import question from '../../images/question.png';
import { Cross } from '../../images/Icons/icons';
import AboutWebsiteModal from '../../Components/AboutWebsiteModal/AboutWebsiteModal';
import { Link } from 'react-router-dom';
import './WebsiteBuilder.css';
import { Form } from 'react-bootstrap';
import Select from 'react-select';

export default function WebsiteBuilder({toggleSidebar,sidebarOpen}) {
    const [createwebsite, setcreatewebsite] = useState(false);
    const [aboutwebsite, setaboutwebsite] = useState(false);

    const optionselect = [
      { value: 'Physics', label: 'Physics' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Mathematics', label: 'Mathematics' },
    { value: 'Science', label: 'Science' },
    ]
    const toggleaboutwebsite = () => {
      setaboutwebsite(!aboutwebsite);
    }
    return (
        <div id="page-content-wrapper">
          <div className={`${aboutwebsite ? 'createwebsite-background' : '' } w-100 position-fixed`}></div>
            <div className="d-flex justify-content-center align-items-center">
                <AboutWebsiteModal show={aboutwebsite} close={toggleaboutwebsite} />
            </div>
          <Navbar title={'Create Website'} toggleSidebar={toggleSidebar} />
            <div id="createwebsite" className={`d-flex align-items-center justify-content-center mt-2 ${sidebarOpen ? 'sidebarActive' : ''}`} style={{ height: '100vh'}}>    
              <div className={`d-flex flex-column CreateWebsiteModal align-items-center justify-content-center bg-white px-4 ${sidebarOpen ? 'sidebarActive' : ''}`} id="CreateWebsiteModal">
                  <h5 className="mb-3 d-block d-md-none">Create Website</h5>
                  <div className="d-flex flex-column"style={{width: '100%'}}>
                  <form className="">
                    <div className="d-flex flex-column mt-3">
                      <label for="classname">Institute Name:</label>
                      <input
                        type="text"
                        id="classname"
                        name="classname"
                        placeholder="Name of Institute"
                        className="px-3 py-2"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <label for="addsubject">About the Institute:</label>
                      <textarea
                        id=""
                        name=""
                        rows={3}
                        placeholder="About Institute"
                        className="px-3 py-2 mb-2"
                        style={{outline: 'none'}}
                      />
                    </div>
                    <button type="button" onClick={() => toggleaboutwebsite()} className="border-0 bg-transparent"><img src={question} alt="question" className="mb-2" /></button>
                    <div className="d-flex flex-column">
                      <label for="maxmarks">Courses:</label>
                      <input
                        type="text"
                        id="maxmarks"
                        name="maxmarks"
                        placeholder="Courses"
                        className="px-3 py-2"
                      />
                    </div>
                    <div className="d-flex flex-column selectionsub">
                      <Form.Group controlId="formGroupPassword" className="d-flex flex-column mb-1">
                        <Form.Label className="float-left mb-2">Add Subjects :</Form.Label>
                        <Select isMulti={true} className="selectmulti multiselection" options={optionselect} />
                      </Form.Group>
                    </div>
                    <div>
                      <label for="">WhatsApp Number:</label>
                      <div className="d-flex flex-row">
                        <input
                          type="text"
                          id=""
                          name=""
                          placeholder="WhatsApp Number"
                          className="px-3 py-2 w-100"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-column">
                      <label for="">Calling Number:</label>
                      <input
                        type="text"
                        id="classname"
                        name="classname"
                        placeholder="Calling Number"
                        className="px-3 py-2"
                      />
                    </div>
                    <div className="d-flex flex-column">
                      <label for="">Introduction Video Link:</label>
                      <input
                        type="text"
                        id="classname"
                        name="classname"
                        placeholder="Introduction Video Link"
                        className="px-3 py-2"
                      />
                    </div>
                    <div className="d-flex flex-row mb-3">
                        <p className="mb-0 marking mt-1 mr-3">Mode of Teaching:</p>
                        <label className="main d-flex flex-row justify-content-between align-items-center mb-0 pb-0">
                          <span className="mt-2 other-text">
                            Online
                          </span>
                          <input type="checkbox" className="mr-1 input" />
                          <span className="geekmark mt-2"></span>
                        </label>
                        <label className="main d-flex flex-row justify-content-center align-items-center mb-0 pb-0">
                          <span className="mt-2 other-text">
                            Offline
                          </span>
                          <input type="checkbox" className="mr-1 input" />
                          <span className="geekmark mt-2"></span>
                        </label>
                    </div>
                    <div className="d-flex flex-row justify-content-center align-items-center mb-3 button-sec">
                      <button type="button" className="button-div other-text bg-white mr-5">
                        Reset
                      </button>      
                      <Link to="/createwebsite/mainpage"
                        type="button"
                        className="button-div blue-bg text-white text-decoration-none d-flex justify-content-center align-items-center"
                        onClick={() => {setcreatewebsite(!createwebsite)}}>
                        Create
                      </Link>
                    </div>
                  </form>

                  </div>
              </div>
            </div>
        </div>
    )
}
