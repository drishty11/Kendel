import React from "react";
import Form from "react-bootstrap/Form";
 import "./filterclass.css";

const FilterClass = (props) => {
  if (!props.filter) {
    return null;
  }
  return (
    <div
      className="modal fade  "
      id="exampleModalCenter3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog mod modal-dialog-centered mr-md-5 mt-md-5" role="document">
        <div className="modal-content">
          <div className="modal-body font-weight-normal shadow-lg">
            <Form className=" row  ">
              {/* <h5 className="border-bottom border-dark align-content-lg-start ">Create class <CloseIcon onClick={props.onClose}  filter={filter} className="float-right"/></h5> */}
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left">Class </Form.Label>
                <Form.Control as="select">
                  <option> select </option>
                </Form.Control>
                <br />
                <Form.Label className="float-left">Subject</Form.Label>
                <Form.Control as="select">
                  <option> select </option>
                </Form.Control>
                <br />
                <Form.Label className="float-left">Teacher </Form.Label>
                <Form.Control as="select">
                  {" "}
                  <option> select </option>
                </Form.Control>
                <br />
                <div className=" text-center  ">
                
                <button
                className="w-25  btn rounded-pill"
                style={{background:' rgba(1, 27, 83, 1)', color:'#fff'}}
                  type="submit"
                  data-dismiss="modal"
                  
                >
                  Go
                </button>
                
              </div>
                
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
    //     <div className=" shadow-lg border zindex-modal class-set font-color rounded w-25 " onClick={e => e.stopPropagation()}>

    //     <Form className=" row p-3 ">
    //     {/* <h5 className="border-bottom border-dark align-content-lg-start ">Create class <CloseIcon onClick={props.onClose}  filter={filter} className="float-right"/></h5> */}
    //   <Form.Group controlId="formGroupEmail">
    //     <Form.Label className="float-left">Class </Form.Label>
    //     <Form.Control  as="select">
    //                       <option> select </option>
    //                     </Form.Control>
    //                     <br/>
    //     <Form.Label className="float-left" >Subject</Form.Label>
    //     <Form.Control  as="select">

    //                       <option> select  </option>
    //                     </Form.Control>
    //                     <br/>
    //      <Form.Label className="float-left">Teacher </Form.Label>
    //     <Form.Control  as="select">
    //                       <option> select  </option>
    //                     </Form.Control>
    //                     <br/>

    //                     <Button style={{
    //                         background :" rgba(1, 27, 83, 1)",

    //                       }} className="rounded-pill align-self-center w-25 " type = "submit">
    //                       Go
    //                     </Button>

    //   </Form.Group>
    // </Form>

    //       </div>
  );
};
export default FilterClass;
