import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseIcon from "@material-ui/icons/Close";
import "./editclass.css";
const EditClass = (props) => {
  if (!props.show) {
    return null;
  }
  return (
    <div
      className="modal fade "
      id="exampleModalCenter4"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Edit
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>{" "}
          <div className="modal-body font-weight-normal">
            {" "}
            <Form className="  row p-2">
              
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left">Class Name :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="+2 Non Medical"
                />
                <br/>
                <Form.Label className="float-left">Subject :</Form.Label>
                <Form.Control className="rounded-pill" as="select">
                  <option> Physics</option>
                </Form.Control>
                <br />
                <Form.Label className="float-left">Teacher :</Form.Label>
                <Form.Control className="rounded-pill" as="select">
                  <option> Anjali Doda</option>
                </Form.Control>
                <br />
                <div className=" text-center form-group ">
                <button
                className="w-25 btn rounded-pill "
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
    //     <div className="  zindex-modal d-flex justify-content-center align-items-center class-set " onClick={e => e.stopPropagation()}>
    //     <div className=" shadow-lg  border  font-color  rounded  ">

    //     <Form className="  row p-3">
    //     <h5 className="border-bottom border-dark align-content-lg-start ">Edit <CloseIcon onClick={()=>props.setTrigger(false)}  className="float-right"/></h5>
    //   <Form.Group controlId="formGroupEmail">
    //     <Form.Label className="float-left">Class Name :</Form.Label>
    //     <Form.Control className="rounded-pill" type="text" placeholder="+2 Non Medical" />
    //     <Form.Label className="float-left" >Subject :</Form.Label>
    //     <Form.Control className="rounded-pill" as="select">
    //                       <option> Physics</option>
    //       </Form.Control>
    //       <br/>
    //       <Form.Label className="float-left" >Teacher :</Form.Label>
    //     <Form.Control className="rounded-pill" as="select">
    //                       <option> Anjali Doda</option>
    //       </Form.Control>
    //                     <br/>
    //                     <Button style={{
    //                         background :" rgba(1, 27, 83, 1)",

    //                       }} className="rounded-pill text-center w-25 " type="submit">
    //                       Done
    //                     </Button>

    //   </Form.Group>
    // </Form>
    // </div>
    //      </div>
  );
};
export default EditClass;
