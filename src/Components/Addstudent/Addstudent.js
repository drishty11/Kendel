import React,{useState} from "react";
import Form from "react-bootstrap/Form";
import Ellipse from '../../images/Ellipse.svg';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import { IoClose } from "react-icons/all";
import './Addstudent.css';
// import {useContext, useState} from 'react';

export default function Addstudent(props) {

  if (!props.addstudent) {
    return null;
  }

  return (
    <div
      className="modal fade "
      id="exampleModalCenter7"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modalstudent" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              Add Student Details
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
             
              <Form.Group controlId="formGroupText">
                <Form.Label className="float-left"> Name :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter name"
                />
              </Form.Group>
              <Form.Group controlId="formGroupNumber">
                <Form.Label className="float-left"> Mobile No. :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter Mobile no."
                />
              </Form.Group>
              <Form.Group controlId="formGroupEmail">
                <Form.Label className="float-left"> Email :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter Email "
                />
              </Form.Group>
              <Form.Group controlId="formGroupNumber">
                <Form.Label className="float-left"> Class :</Form.Label>
                <Form.Control
                  className="rounded-pill"
                  type="text"
                  placeholder="Enter Class"
                />
              </Form.Group>
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
            </Form>
          </div>
        </div>
      </div>
    </div>
      
    );
  };