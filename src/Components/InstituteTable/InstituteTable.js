import React from 'react';
import './Institutetable.css';
import ChatBoxbutton from '../ChatPopup/ChatPopup';

export default function InstituteTables({changeData, data}) {

    return (

        <table id="InstituteTable" className="d-block d-xl-table">
              <thead>
                <tr>
                {/* {Object.keys(data[0]).map((items,index) => (
                    index ? <th>{items}</th> : <th>Sr.No</th>
                )) */}
                <th>Sr.No</th>
                 <th>Class Name</th>
                 <th>Class</th>
                 <th>Subject</th>
                 <th>Teacher</th>
                 <th>Number Of Students</th>

                </tr>
              </thead>
              <tbody>
                {data.map((info, index) => {
                  return (
                    <tr key={index}>
                      <td>{info.id}</td>
                      {changeData === 'Classes' ? <td>{info.ClassName}</td>: <td> </td>}
                      {changeData==='Classes'?<td>{info.Class}</td>:<td> </td>}
                      {changeData==='Classes'? <td>{info.Subject}</td>:<td> </td>}
                      {changeData ==='Classes' ? <td>{info.Teacher}</td>: <td> </td>}
                      {changeData ==='Classes' ? <td>{info.NumberOfStudents}</td>: <td> </td>}
                    </tr>
                  );
                })}
              </tbody>
            </table>   

    )
}