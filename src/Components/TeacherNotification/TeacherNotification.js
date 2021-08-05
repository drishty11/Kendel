import React,{useState} from "react";
import "./TeacherNotification.css";
import Ellipse from '../../images/Ellipse.svg';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { IoClose } from "react-icons/all";
import ModalToggle from '../Toggle/ModalToggle/ModalToggle';
import Select from 'react-select';
// import {useContext, useState} from 'react';

export default function TeacherNotification(props) {
  const [toggle, setToggle] = useState(false);
  const [secondtoggle, secondsetToggle] = useState(false);
  if (!props.show) {
    return null;
  }

  const optionselect = [
    { value: 'Physics', label: 'Physics' },
  { value: 'Chemistry', label: 'Chemistry' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Science', label: 'Science' },
  ]
  return (
    <div
      className="modal fade "
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered mt-5 m-auto teachermodal"  role="document">
        <div className="modal-content">
          <div className="modal-header" style={{padding: '18px 30px'}}>
            <h5 className="modal-title" id="exampleModalLongTitle">
              Add Teacher
            </h5>
            <button onClick={props.onClose}
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body font-weight-normal" style={{padding: '18px 30px'}}>
            <form>
              <div className="form-row mt-2">
                <div className="form-group col-sm-6">
                  <label for="inputEmail4" className="mb-2">Name :</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="inputPassword4" className="mb-2">Email :</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="inputPassword4"
                    placeholder="Enter Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label for="inputEmail4" className="mb-2">Mobile No.:</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="inputPassword4">Subject :</label>
                  <Select isMulti={true} className="selectmulti" options={optionselect}/>
                </div>
              </div>
                <div className="form-row">
                    <div className="col-sm-6">
                        <div className="form-row">
                            <div className="mb-2">
                                <label className="mb-2 mr-4">Add/Remove Students</label>
                                <ModalToggle id="1" toggle={toggle} setToggle={setToggle} />      
                            </div>
                            <div className="form-group float-right col-sm-3">
                                <label className="mb-2">Create Test</label>
                                <ModalToggle id="2" toggle={secondtoggle} setToggle={secondsetToggle} />  
                            </div>
                        </div>
                    </div>
                    <div className="form-group col-sm-6 mb-2">
                        <label className="mb-2">Profile Picture:</label>
                        <div class="custom-file mb-3">
                          <input
                            type="file"
                            class="custom-file-input"
                            id="customFile"
                          />
                          <label class="custom-file-label mb-2" for="customFile">
                            Choose file
                          </label>
                        </div>
                    </div>
                </div>
              <div className=" text-center form-group">
                <button
                className="btn rounded-pill mr-2 addteacher-btn"
                style={{background:' rgba(1, 27, 83, 1)', color:'#fff', width: '18%'}}
                  type="submit"
                  data-dismiss="modal"
                  
                >
                  Add
                </button>
                <button style={{color:' rgba(1, 27, 83, 1)', borderColor: '#011B53',width: '18%'}}  className="btn rounded-pill addteacher-btn" type="submit" >
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  );
}