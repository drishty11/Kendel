import React, { useState } from "react";
import "./editstaff.css";
import Select from 'react-select';
import Ellipse from "../../images/Ellipse.svg";
import ModalToggle from '../Toggle/ModalToggle/ModalToggle';
export default function EditStaff(props) {
  const [inname, setInname] = useState();
  const handleChange = (e) => {
    e.preventDefault();
    setInname(e.target.value);
  };
  const optionselect = [
    { value: 'Physics', label: 'Physics' },
  { value: 'Chemistry', label: 'Chemistry' },
  { value: 'Mathematics', label: 'Mathematics' },
  { value: 'Science', label: 'Science' },
  ]

  if (!props.edit) {
    return null;
  }

  return (
    <div
      className="modal fade text-left "
      id="exampleModalCenter1"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered teachermodal" role="document">
        <div className="modal-content">
          <div className="modal-header" style={{padding: '18px 30px'}}>
            <h5 className="modal-title" id="exampleModalLongTitle">
              Edit Teacher
            </h5>
            <button
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
              <div className="form-row">
                <div className="form-group col-sm-6">
                  <label for="inputEmail4">Name :</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label for="inputPassword4">Email :</label>
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
                  <label for="inputEmail4">Mobile No.:</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Mobile No."
                  />
                </div>
                <div className="form-group col-sm-6">
                  <label htmlFor="inputPassword4">Subject :</label>
                  {/* <input
                    type="text"
                    className="form-control rounded-pill"
                    value={inname}
                    onChange={handleChange}
                    placeholder={inname}
                    autoComplete="off"
                
                  /> */}
                  <Select isMulti={true} className="selectmulti" options={optionselect}/>
                </div>
              </div>
              <div className="form-row">
                    <div className="col-sm-6">
                        <div className="form-row">
                            <div className="mb-3">
                                <label className="mb-2 mr-4">Add/Remove Students</label>
                                <ModalToggle id="1" />      
                            </div>
                            <div className="form-group float-right col-sm-3">
                                <label className="mb-2">Create Test</label>
                                <ModalToggle id="2" />  
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
              
                
              <div className=" text-center form-group ">
                <button
                  className="w-25 btn rounded-pill mr-2"
                  style={{ background: " rgba(1, 27, 83, 1)", color: "#fff" }}
                  type="submit"
                  data-dismiss="modal"
                >
                  Edit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
