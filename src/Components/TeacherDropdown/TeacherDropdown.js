import React, { useState, useEffect, useRef, forwardRef} from 'react';
import './TeacherDropdown.css';
import { Upload, LinkImg, ThreeDot  } from '../../images/Icons/icons';


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
const SharedDropdown = () => {
    const [shared, setShared]= useState(false);

    const Sharedref = useRef(null);


    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (shared && Sharedref.current && !Sharedref.current.contains(e.target)) {
            setShared(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [shared])
    return (
        <>
        <button className="border-0 outline-0 bg-transparent" onClick={() => setShared(true)}>
            <ThreeDot />                                  
        </button>
        {shared ? 
        <div id="SharedModal" className="SharedModal d-flex flex-column  position-absolute bg-white border-0 my-2" ref={Sharedref} >
            <div className="SharedModal-content border-0 d-flex flex-column">
                <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Edit</button>
                <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Delete</button>
                <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Download</button>
            </div>
        </div>
       
        : ""}
        </>
    )
}
const ConductedDropdown = () => {
    const [shared, setShared]= useState(false);

    const Sharedref = useRef(null);


    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (shared && Sharedref.current && !Sharedref.current.contains(e.target)) {
            setShared(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [shared])
    return (
        <>
        <button className="border-0 outline-0 bg-transparent" onClick={() => setShared(true)}>
            <ThreeDot />                                  
        </button>
        {shared ? 
        <div id="SharedModal" className="SharedModal d-flex flex-column  position-absolute bg-white border-0 my-2" ref={Sharedref} >
            <div className="SharedModal-content border-0 d-flex flex-column">
                <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Student Work</button>
                <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Download</button>
            </div>
        </div>
       
        : ""}
        </>
    )
}
const DraftedDropdown = () => {
    const [drafted, setDrafted]= useState(false);

    const Draftedref = useRef(null);


    useEffect(() => {
        const checkIfClickedOutside = e => {
         
          if (drafted && Draftedref.current && !Draftedref.current.contains(e.target)) {
            setDrafted(false)
          }
        }
    
        document.addEventListener("mousedown", checkIfClickedOutside)
    
        return () => {
          document.removeEventListener("mousedown", checkIfClickedOutside)
        }
      }, [drafted])
    return (
        <>
        <button className="border-0 outline-0 bg-transparent" onClick={() => setDrafted(true)}>
            <ThreeDot />                                  
        </button>
        {drafted ? 
        <div id="SharedModal" className="SharedModal d-flex flex-column  position-absolute bg-white border-0 my-2" ref={Draftedref} >
                <div className="SharedModal-content border-0 d-flex flex-column">
                    <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Edit</button>
                    <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Share</button>
                    <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Delete</button>
                    <button type="button" className="SharedModal-btn px-3 text-align-left w-100 border-0 other-text">Download</button>
                </div>
        </div>
       
        : ""}
        </>
    )
}
const TeacherDropdown = () => {
    const [active,setActive]= useState(false);

    const Dropdownref = useRef(null);


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
    return (
        <>
        <button className="border-0 outline-0 bg-transparent" onClick={() => setActive(true)}>
            <ThreeDot />                                  
        </button>
        {active ? 
        <div className="threedotModal d-flex flex-column position-absolute bg-white border-0 mb-4" ref={Dropdownref} >
                <div className="threedotModal-content border-0 d-flex flex-column">
                    <button type="button" className="threedotModal-btn px-3 text-align-left w-100 border-0 other-text">Edit</button>
                    <button type="button" className="threedotModal-btn px-3 text-align-left w-100 border-0 other-text">Delete</button>
                </div>
        </div>
        : ""}
        </>
    )
}

export { DropdownAdd, PostDropdown, StudentDropdown, SharedDropdown, ConductedDropdown, DraftedDropdown, TeacherDropdown }
