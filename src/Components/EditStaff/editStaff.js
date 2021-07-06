import React, { useState } from "react";
import "./editstaff.css";
import Select from 'react-select';
import Ellipse from "../../images/Ellipse.svg";
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
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
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
          <div className="modal-body font-weight-normal">
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
                <div className="form-group col-sm-6">
                  <div className="form-row">
                    <div className="form-group col-sm-3 mr-sm-0 mr-lg-5 mr-md-5">
                      <label>Add/Remove Students</label>
                      <div className="form-check float-right form-switch">
                        <input
                          className="form-check-input modal-out "
                          style={{
                            width: "80px",
                            height: "34px",
                            boxShadow: "none",
                            marginLeft: "-65px",
                            backgroundImage: `url(${Ellipse})`,
                            backgroundRepeat: "no-repeat",
                          }}
                          type="checkbox"
                          onClick={() => {}}
                          id="flexSwitchCheckChecked"
                        ></input>
                      </div>
                    </div>
                    <div className="ml-lg-5 ml-md-5 ml-sm-0 form-group float-right col-sm-3">
                      <label>Create Test</label>
                      <div className="form-check float-right form-switch ">
                        <input
                          style={{
                            width: "80px",
                            height: "34px",
                            boxShadow: "none",
                            marginLeft: "-65px",
                            backgroundImage: `url(${Ellipse})`,
                            backgroundRepeat: "no-repeat",
                          }}
                          className="form-check-input modal-out"
                          type="checkbox"
                          id="flexSwitchCheckChecked"
                        />
                      </div>
                    </div>
                  </div>
                  {/* <div className="form-row">
                  <div className="form-group col-sm-3 mr-sm-0 mr-lg-5 mr-md-5">
                    <label>Add/Remove Students</label>
                    <div className="form-check float-right form-switch">
                      <input
                        className="form-check-input modal-out "
                        style={{width:"80px",height:"34px", boxShadow: "none", marginLeft:"-65px",backgroundRepeat:"no-repeat"}}
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />

                      </div>

                  
                  </div>
                  <div className="ml-lg-5 ml-md-5 ml-sm-0 form-group float-right col-sm-3">
                    <label>Create Test</label>
                    <div className="form-check float-right form-switch">
                      <input
                       style={{width:"80px",height:"34px", boxShadow: "none",marginLeft:"-65px",backgroundRepeat:"no-repeat"}}
                        className="form-check-input modal-out"
                        type="checkbox"
                        id="flexSwitchCheckChecked"
                      />
                      </div>

                  
                  </div>
                  </div> */}
                </div>
                <div className="form-group col-sm-6">
                  <label>Profile Picture:</label>

                  {/* <input type="file" class="form-control-file" id="exampleFormControlFile1"/> */}

                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile">
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
