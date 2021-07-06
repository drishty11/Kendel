import React, { useState, useEffect, useRef, forwardRef} from 'react';
import './TeacherDropdown.css';
import { Upload, LinkImg  } from '../../images/Icons/icons';


const DropdownAdd = React.forwardRef((props,ref) => {  
    return (
        <div id="addModal" className="addModal d-flex flex-column  position-absolute bg-white border-0 my-5" ref={ref}>
                <div className="addModal-content border-0 d-flex flex-column">
                    <button type="button" className="modal-btn bg-white px-3 text-align-left w-100 border-0 other-text"><Upload />File Upload</button>
                    <button type="button" className="modal-btn bg-white px-3 text-align-left w-100 border-0 other-text"><LinkImg />Link</button>
                </div>
        </div>
    )
})

const PostDropdown = React.forwardRef((props,ref) => {
    return (
        <div id="PostModal" className="PostModal d-flex flex-column  position-absolute bg-white border-0 my-2" ref={ref} >
                <div className="PostModal-content border-0 d-flex flex-column">
                    <button type="button" className="Postmodal-btn px-3 text-align-left w-100 border-0 other-text">Post</button>
                    <button type="button" className="Postmodal-btn px-3 text-align-left w-100 border-0 other-text">Save Draft</button>
                    <button type="button" className="Postmodal-btn px-3 text-align-left w-100 border-0 other-text">Delete Draft</button>
                </div>
        </div>
    )
})

const StudentDropdown = React.forwardRef((props,ref) => {

    const Students =[
        {
            name: 'Anjali',
        },
        {
            name: 'Priya',
        },
        {
            name: 'Ria',
        },
        {
            name: 'Kavya',
        },
        {
            name: 'Kavya',
        },
        {
            name: 'Kavya',
        },
        {
            name: 'Kavya',
        },{
            name: 'Kavya',
        },
    ]
    return (
        <div id="StudentModal" className="StudentModal position-absolute d-flex flex-column bg-white border-0" ref={ref} >
           <div className="StudentModal-content border-0 d-flex px-3 flex-column">
            <h6>All Students</h6>    
                    {Students.map((student,index) => {
                        return (
                            <div key={index} className="d-flex flex-row justify-content-start align-items-center StudentModal-btn ">
                                <label className="main mb-2" >{student.name}
                                    <input type="checkbox" className="mr-2 input "/>
                                    <span className="geekmark"></span>
                                </label>
                            </div>
                        )
                    }
                    )}
              </div>      
        </div>
    )
})
const TeacherDropdown = React.forwardRef((props,ref) => {
    return (
        <div id="threedotModal" className="threedotModal d-flex flex-column  position-absolute bg-white border-0 my-4" ref={ref} >
                <div className="threedotModal-content border-0 d-flex flex-column">
                    <button type="button" className="threedotModal-btn px-3 text-align-left w-100 border-0 other-text">Edit</button>
                    <button type="button" className="threedotModal-btn px-3 text-align-left w-100 border-0 other-text">Delete</button>
                </div>
        </div>
    )
})

export { DropdownAdd, PostDropdown, StudentDropdown, TeacherDropdown }
