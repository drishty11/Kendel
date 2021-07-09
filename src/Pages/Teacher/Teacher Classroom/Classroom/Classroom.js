import React, { useState,useRef, useEffect } from 'react';
import './Classroom.css';
import { Link } from 'react-router-dom';
import { Add, Send, DownArrow } from '../../../../images/Icons/icons';
import image from '../../../../images/writing.png'
import Navbar from '../../../../Components/Navbar/Navbar';
import images from '../../../../images/userimg.jpg';
import { DropdownAdd, PostDropdown, StudentDropdown, TeacherDropdown } from '../../../../Components/TeacherDropdown/TeacherDropdown';
import BreadCrumbs from '../../../../Components/BreadCrumbs/BreadCrumbs';

export default function Classroom({ sidebarOpen, toggleSidebar }) {

   const breadcrumbPath = [
     {to: '/classes', label: 'Classes',},
     {to: '/classes/classroom', label: 'Class Name',}
   ]

    
    const Dropdownref = useRef(null);

    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState('');


    useEffect(() => {
      const checkIfClickedOutside = e => {
       
        if (active && Dropdownref.current && !Dropdownref.current.contains(e.target)) {
          setActive(false)
        }
      }
  
      document.addEventListener("mousedown", checkIfClickedOutside)
  
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [active])

    const onClose = () => {
      setIsExpanded(false);
    };

    return (
        <div id="page-content-wrapper">
            <Navbar title={'Classroom'} toggleSidebar={toggleSidebar} />
            <BreadCrumbs crumbs={breadcrumbPath} />
            <div id="classes" className={`container-fluid px-4 pt-5 mt-5 mb-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                <div className="pt-4 px-lg-4 mt-5 d-flex flex-column mb-4">
                    <form className="w-100 form p-3 mb-4" >
                            <div className="d-flex flex-row align-items-center justify-content-center">
                              {isExpanded ? 
                               (
                                 <div className="w-100">
                                    <textarea name="content" placeholder="Announce something to your class" className="w-100 d-flex justify-content-center align-items-center border-top-0 border-left-0 border-right-0 p-3 text-area mb-2 mb-md-4" 
                                    rows="4" />
                                    <div className="d-flex flex-column justify-content-between btn-section flex-lg-row ">
                                      <div className="d-flex justify-content-between btn-1">
                                        
                                          <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center" style={{ width: '100px', height: '40px'}} onClick={(e) => setActive('Add')}><Add/> Add</button>
                                          {active === 'Add' ? <DropdownAdd ref={Dropdownref} /> : '' } 
                                          <button type="button" className="dropdownbtn other-text d-flex justify-content-center align-items-center" style={{ width: '130px', height: '40px'}} onClick={() => setActive('Student')} >All Students {active === 'Student' ? <StudentDropdown ref={Dropdownref} /> : '' } </button>
                                         
                                      </div>
                                      <div className="d-flex justify-content-between btn-2">
                                          <button type="button" className="dropdownbtn bg-white " style={{ width: '100px', height: '40px'}} onClick={() => onClose()}>Cancel</button>
                                          <button type="button" className="dropdownbtn bg-white " style={{ width: '130px', height: '40px'}}  onClick={() => setActive('Post')}> Post <DownArrow />{active === 'Post' ? <PostDropdown  ref={Dropdownref} /> : ''}</button>
                                          
                                      </div>
                                    </div>
                                  </div>
                                 ) : (
                                   <div className="w-100 d-flex flex-row align-items-center">
                                      <img src={images} alt="images" width="35" height="35" className="rounded-full mr-2" />
                                     <input type="text" onClick={() => setIsExpanded(true)} placeholder="Announce something to your class" className="w-100 d-flex justify-content-center align-items-center border-0 mb-0 p-2" style={{ outline: 'none',  fontSize: '17px' }} />
                                   </div>
                                )
                              }
                            </div>
                    </form>

                   
                    <div className="d-flex flex-column bg-white post mb-4">
                        <div className="d-flex flex-row justify-content-between align-items-center mb-3 p-3">
                          <div className="d-flex flex-row justify-content-center align-items-center">
                            <img src={images} alt="images" width="35" height="35" className="mr-3 rounded-full" />
                            <div className="d-flex flex-column justify-content-center align-items-start">
                                <h6>Anjali Doda</h6>
                                <p className="mb-0">Jan 16</p>
                            </div>
                          </div>
                          <div className="position-relative">
                            <TeacherDropdown />
                          </div>
                        </div>
                        <div className="d-flex flex-column p-3">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                            <div className="row upload m-2 p-3">
                                <div className="col file px-0" style={{ borderRadius: '8px 0 0 8px'}}>
                                    <label className="profile mr-0 mb-0 primary-bg"> 
                                        <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " />
                                    </label>
                                </div>
                                <div className="col file px-0" style={{ borderRadius: '0 8px 8px 0'}}>
                                    <h6 className="my-3 mx-2">File Name</h6>
                                    <p className="mb-4 mx-2">Word File</p>
                                </div>
                            </div>
                        </div>
                        <hr className="opacity-3 bg-white py-0.25 lining" />
                        <div className="d-flex flex-row align-items-center p-3 pb-4">
                          <img src={images} alt="images" width="35" height="35" className="mr-3 rounded-full" />
                          <div className="d-flex flex-row justify-content-between align-items-center comment-section w-75 px-3 py-2">
                            <input type="text" placeholder="Add class comment" className="w-100 border-0" style={{ fontSize: '14px' }} />
                            <Send />
                          </div>
                        </div>
                    </div>


                   
                    <div className="d-flex justify-content-between align-items-center p-3 mb-5 notes text-decoration-none other-text bg-white cursor-pointer">
                        <div className="d-flex justify-content-center align-items-center">
                          <div className="d-flex justify-content-center align-items-center noteIcon">
                            <img src={image} alt="writing" style={{ marginTop: '2px', marginLeft: '2px'}} />
                          </div>
                          <Link to="/classes/classroom/studymaterial" className="ml-3 mb-0 text-decoration-none other-text" style={{ fontSize:"16px", fontWeight: "600"}}>Electromagnetic Notes</Link>
                        </div>
                        <div className="position-relative">
                          <TeacherDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}