import React from "react";
import Form from "react-bootstrap/Form";
 import "./filterclass.css";

const FilterClass = (props) => {
  if (!props.filter) {
    return null;
  }
  return (
    <div
      className="modal fade"
      id="exampleModalCenter3"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog mod modal-dialog-centered mr-md-5 mt-md-5" role="document">
        <div className="modal-content">
          <div className="modal-body font-weight-normal shadow-lg">
            <Form className="row">
              {/* <h5 className="border-bottom border-dark align-content-lg-start ">Create class <CloseIcon onClick={props.onClose}  filter={filter} className="float-right"/></h5> */}
              <Form.Group controlId="formGroupEmail" style={{padding: '30px 30px 0 30px'}}>
                <Form.Label className="float-left mb-2">Class </Form.Label>
                <Form.Control as="select">
                  <option> --Select-- </option>
                  <option value="1">6th</option>
                  <option value="2">7th</option>
                  <option value="3">8th</option>
                  <option value="3">9th</option>
                  <option value="3">10th</option>
                  <option value="3">11th</option>
                  <option value="3">12th</option>
                </Form.Control>
                {/* <Form.Select aria-label="Default select example">
                  <option>--Select--</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select> */}
                <br />
                <Form.Label className="float-left mb-2">Subject</Form.Label>
                <Form.Control as="select">
                  <option>--Select--</option>
                  <option value="1">Physics</option>
                  <option value="2">Chemistry</option>
                  <option value="3">Maths</option>
                  <option value="3">English</option>
                </Form.Control>
                <br />
                <Form.Label className="float-left mb-2">Teacher </Form.Label>
                <Form.Control as="select">
                  {" "}
                  <option>--Select--</option>
                  <option value="1">Ankita</option>
                  <option value="2">Anjali</option>
                  <option value="3">Ankita</option>
                </Form.Control>
                <br />
                <div className="text-center">
                
                <button
                className="btn rounded-pill go-btn"
                style={{background:' rgba(1, 27, 83, 1)', color:'#fff', width: '35%'}}
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
