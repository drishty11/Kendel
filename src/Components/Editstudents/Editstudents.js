import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import './Editstudents.css';
export default function Editstudent(props) {
//   const [inname,setInname] = useState();
//   const handleChange=(e)=>{
//     e.preventDefault();
//     setInname(e.target.value);

//   }

  if (!props.edit) {
    return null;
  }

  return (
    <div
      className="modal fade text-left "
      id="exampleModalCenter9"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Edit Student Details
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
                
                  <label for="inputEmail4">Name :</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Name"
                  />
                

              </div>
              <div className="form-row">
                
                  <label for="inputEmail4">Mobile No.:</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputEmail4"
                    placeholder="Enter Mobile No."
                  />
                
                
              </div>
              <div className="form-row">
        
                  <label for="inputPassword4">Email :</label>
                  <input
                    type="email"
                    className="form-control rounded-pill"
                    id="inputPassword4"
                    placeholder="Enter Email"
                  />
                
                
                
                
              </div>
              <div className="form-row">
            
                  <label for="inputPassword4">Class :</label>
                  <input
                    type="text"
                    className="form-control rounded-pill"
                    id="inputPassword4"
                    placeholder="10th"
                  />
            
                
                
                
              </div>
              <br/>
              <div className=" text-center form-group ">
                <button
                  className="w-25 btn rounded-pill mr-2"
                  style={{ background: " rgba(1, 27, 83, 1)", color: "#fff" }}
                  type="submit"
                  data-dismiss="modal"
                >
                  Done
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
