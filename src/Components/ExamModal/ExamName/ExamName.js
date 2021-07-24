import React, { useState } from 'react';
import { Cross } from '../../../images/Icons/icons';
import './ExamName.css';

export default function ExamName({show, close}) {
  return (
        <>
        { show ? 
        <div className="d-flex flex-column examname position-absolute bg-white pb-5 pt-3 px-2">
            <button className="d-flex justify-content-end px-4 border-0 bg-white pb-3" onClick={close}>
              <Cross />
            </button>
            <div className=" d-flex flex-column px-4">
                <ul class="list-group">
                    <li class="list-group-item p-3" style={{ fontSize: '16px', color: '#0D4FD3'}}>Exam Name</li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>Class : <span></span></li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>Exam Duration : <span></span></li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>Subject : <span></span></li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>Start Date : <span></span></li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>End Date : <span></span></li>
                    <li class="list-group-item p-3 h6 mb-0" style={{ fontSize: '12px'}}>Marking : <span></span></li>
                    <li class="list-group-item p-3" style={{ fontSize: '12px'}}><h6 style={{ fontSize: '12px'}}>Exam Description : </h6>
                        <p className="p6 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    </li>
                    <li class="list-group-item p-3" style={{ fontSize: '12px'}}><h6 style={{ fontSize: '12px'}}>Exam Instruction :</h6>
                        <p className="p6 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>
                    </li>
                </ul>    
            </div>  
        </div> 
        : '' }
        </>
    )
}
