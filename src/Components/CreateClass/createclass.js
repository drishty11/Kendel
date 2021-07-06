import React from "react";
import Form from "react-bootstrap/Form";
import "./createclass.css";



const CreateClass = (props) => {

  if (!props.show) {
    return null;
  }
  return (
    <div
      className="modal fade "
      id="exampleModalCenter2"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"

    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Create Class
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
            <Form className="p-2 ">
             
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left">Class Name :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="float-left">Subject :</Form.Label>
                <Form.Control className="rounded-pill" as="select">
                  <option> select</option>
                </Form.Control>
                <br />
                <div className=" text-center form-group ">
                <button
                className="w-25 btn rounded-pill mr-2"
                style={{background:' rgba(1, 27, 83, 1)', color:'#fff'}}
                  type="submit"
                  data-dismiss="modal"
                  
                >
                  Create
                </button>
                
              </div>
              </Form.Group>
            </Form>

            
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default CreateClass;
