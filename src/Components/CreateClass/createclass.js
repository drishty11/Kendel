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
            <h6 className="modal-title" id="exampleModalLongTitle">
              Create Class
            </h6>
            <button
              type="button"
              className="close pb-0"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body font-weight-normal">
            <Form className="py-2">
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left mb-2">Class Name :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupPassword">
                <Form.Label className="float-left mb-2">Subject :</Form.Label>
                <Form.Control className="rounded-pill" as="select" xs>
                  <option> select</option>
                  <option value="1"> Physics</option>
                  <option value="2"> Chemistry</option>
                  <option value="3"> Maths</option>
                </Form.Control>
                <br/>
                <div className=" text-center form-group ">
                <button
                className="btn rounded-pill mr-2"
                style={{background:' rgba(1, 27, 83, 1)', color:'#fff', width: '35%'}}
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
