import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import CloseIcon from "@material-ui/icons/Close";

const EditTiming = (props) => {
  if (!props.time) {
    return null;
  }
  return (
    <div
      className="modal fade "
      id="exampleModalCenter5"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
            Lecture Timing & Teacher
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>{" "}
            </button>{" "}
          </div>{" "}
          <div className="modal-body font-weight-normal">
            {" "}
            <Form className="  row p-3">
             
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left">Teacher :</Form.Label>
                <Form.Control className="rounded-pill" as="select">
                  <option> Anjali Doda</option>
                </Form.Control>
                <br />
                <Form.Label className="float-left">From </Form.Label>
                <br />
                <div className="row">
                  <Form.Control
                    className="rounded-pill w-25 mr-2 ml-2"
                    as="select"
                  >
                    <option> 09</option>
                  </Form.Control>
                  <Form.Control className="rounded-pill w-25 mr-2" as="select">
                    <option> 00</option>
                  </Form.Control>
                  <Form.Control className="rounded-pill w-25 mr-2" as="select">
                    <option> AM</option>
                    <option> PM</option>
                  </Form.Control>
                </div>
                <br />
                <Form.Label className="float-left">To </Form.Label>
                <br />
                <div className="row">
                  <Form.Control
                    className="rounded-pill w-25 mr-2 ml-4"
                    as="select"
                  >
                    <option>10</option>
                  </Form.Control>
                  <Form.Control className="rounded-pill w-25 mr-2" as="select">
                    <option> 00</option>
                  </Form.Control>
                  <Form.Control className="rounded-pill w-25 mr-2" as="select">
                    <option> AM</option>
                    <option> PM</option>
                  </Form.Control>
                </div>

                <br />
                <Button
                  style={{
                    background: " rgba(1, 27, 83, 1)",
                  }}
                  className="rounded-pill text-center w-25 "
                  type="submit"
                >
                  Done
                </Button>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    </div>
    
  );
};
export default EditTiming;
