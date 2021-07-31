import React from 'react';
import './Institutetable.css';
import ChatBoxbutton from '../ChatPopup/ChatPopup';

export default function InstituteTables({changeData, data}) {

    return (

      <table id="institutetable" className="d-block d-xl-table">
      <thead>
        <tr>
        {Object.keys(data[0]).map((items,index) => (
            index ? <th>{items}</th> : <th>Sr.No</th>
        ))
        // <th>ClassName</th>
        // <th>Class</th>
        // <th>Subject</th>
        // <th>Teacher</th>
        // <th>Number Of Students</th>
}
        </tr>
      </thead>
      <tbody>
        {data.map((info, index) => {
          return (
            <tr key={index}>
              <td>{info.id}</td>
              {changeData === 'My Classes' ? <td>{info.ClassName}</td>: <td>{info.ExamName}</td>}
              <td>{info.Class}</td>
              <td>{info.Subject}</td>
              {changeData === 'My Classes' ? <td>{info.Teacher}</td>: <td>{info.StartDate}</td>}
              {changeData === 'My Classes' ? <td>{info.NumberOfStudents}</td>: <td>{info.EndDate}</td>}
            </tr>
          );
        })}
      </tbody>
    </table>    

    )
}