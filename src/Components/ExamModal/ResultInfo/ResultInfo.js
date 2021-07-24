import React from 'react';
import { Doughnut } from 'react-chartjs-2/dist';
import { Cross } from '../../../images/Icons/icons';
import './ResultInfo.css';

export default function ResultInfo({show, close}) {

    const data = {
          datasets: [
            {
              data: [80,10,10],
              backgroundColor: ['#51CC25','#FF0000', '#05060F4D'],
             
        
            },
          ]
      }

    return (
        <>
        {show ?
        <div className="d-flex flex-column resultInfo position-absolute bg-white pb-4 pt-3 px-2">
            <button className="d-flex justify-content-end px-4 border-0 bg-white pb-3" onClick={close}>
                <Cross />
            </button>
            <div className="d-flex flex-column px-4 mb-3">
                <ul className="list-group" style={{ borderRadius: '8px'}}>
                    <li className="list-group-item h5 mb-0 p-3" style={{ fontSize: '16px', color: '#0D4FD3'}}>Result Information</li>
                    <li className="list-group-item h6 mb-0 p-3" style={{ fontSize: '12px'}}>Exam Name :</li>
                    <li className="list-group-item h6 mb-0 p-3" style={{ fontSize: '12px'}}>Questions :
                        <div class="d-flex flex-row justify-content-between mt-2" style={{ width: '60%' }}>
                            <h6 className="mb-0" style={{ fontSize: '12px'}}>Correct :</h6>
                            <h6 className="mb-0" style={{ fontSize: '12px'}}>Incorrect :</h6>
                        </div>
                    </li>
                    <li class="d-flex flex-row justify-content-between list-group-item p-3" style={{ fontSize: '12px'}}>
                        <h6 className="mb-0" style={{ fontSize: '12px'}}>Max Marks : 360</h6>
                        <h6 className="mb-0" style={{ fontSize: '12px'}}>Marks Obtained : 360</h6>
                    </li>
                </ul>        
            </div>
            <div className="d-flex flex-column px-4">
                <ul className="list-group-item" style={{ borderRadius: '8px'}}>
                    <div className="d-flex flex-row justify-content-around">
                        <div>
                            <h5 style={{ fontSize: '15px', color: '#0D4FD3'}}>Physics</h5>
                        </div>
                        <h6 style={{ fontSize: '14px'}}>Marks : </h6>
                    </div>
                    <div className="d-flex flow-row justify-content-start">
                        <div className="d-flex relative chart1 mr-3"> 
                            <Doughnut data={data} options={{ responsive: true, maintainAspectRatio:false,cutout: '80%'}}   />
                        </div>
                        <div className="d-flex flex-column py-1 details m-auto"> 
                            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                                <p className="dot mb-0" style={{ background: '#51CC25'}}></p>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>Answer</h6>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>20</h6>
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-center mb-3">
                                <p className="dot mb-0" style={{ background: '#FF0000'}}></p>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>Incorrect</h6>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>20</h6>
                            </div>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                                <p className="dot mb-0" style={{ background: 'rgba(5, 6, 15, 0.3)'}}></p>
                                <h5 className="mb-0" style={{ fontSize: '13px'}}>Not Answered</h5>
                                <h5 className="mb-0" style={{ fontSize: '13px'}}>20</h5>
                            </div> 
                        </div>
                     
                    </div>
                </ul>
            </div>
            <div className="d-flex flex-column px-4">
                <ul className="list-group-item" style={{ borderRadius: '8px'}}>
                    <div className="d-flex flex-row justify-content-around">
                        <div>
                            <h5 style={{ fontSize: '15px', color: '#0D4FD3'}}>Accuracy</h5>
                        </div>
                        <h6 style={{ fontSize: '14px'}}>75 %</h6>
                    </div>
                    <div className="d-flex flow-row justify-content-start">
                        <div className="d-flex relative chart1 mr-5"> 
                            <Doughnut data={data} options={{ responsive: true, maintainAspectRatio:false,cutout: '80%'}}   />
                        </div>
                        <div className="d-flex flex-column py-1 details m-auto"> 
                            <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                                <p className="dot mb-0 mr-2" style={{ background: '#51CC25'}}></p>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>Correct</h6>
                            </div>
                            <div className="d-flex flex-row justify-content-start align-items-center mb-3">
                                <p className="dot mb-0 mr-2" style={{ background: '#FF0000'}}></p>
                                <h6 className="mb-0" style={{ fontSize: '13px'}}>Incorrect</h6>
                            </div>
                            <div className="d-flex flex-row justify-content-start align-items-center">
                                <p className="dot mb-0 mr-2" style={{ background: 'rgba(5, 6, 15, 0.3)'}}></p>
                                <h5 className="mb-0" style={{ fontSize: '13px'}}>Not Answered</h5>
                            </div> 
                        </div>
                     
                    </div>
                </ul>
            </div>
           
        </div>
            : ''
        }
        </>
    )
}
