import React from 'react';
import './TeacherNotification.css';
import { IoClose } from 'react-icons/all';
// import {useContext, useState} from 'react';

export default function TeacherNotification(props) {

    if (!props.show) {
        return null;
    } 
      
    return (
        // <div className="Studentoverlay"  onClick={props.onClose}>
        //     <div className="Studentoverlay-content" onClick={e => e.stopPropagation()}>
        //         <div className="Studentoverlay-header">
        //             <h3>Add Students</h3>
        //             <button onClick={props.onClose} className="StudenteditBtn">X</button>
        //         </div>
        //         <form class="Studentform">
        //             <label for="name">Name:</label>
        //             <input type="email" id="name"  name="name" />
        //             <label for="mobile">Mobile No.:</label>
        //             <input type="password" id="mobile" name="mobile" />     
        //             <label for="email">Email:</label>
        //             <input type="password" id="email" name="email" />     
        //             <label for="class">Class:</label>
        //             <input type="password" id="class" name="class" />  
        //             <div style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
        //                 <button type="submit" className="closeBtn" onClick={props.onClose}>Add</button>
        //                 <button type="submit" className="closeBtn" onClick={props.onClose}>Reset</button>
        //             </div>   
        //         </form>
        //     </div>
        // </div>
      
        <div className="Studentoverlay-content" onClick={e => e.stopPropagation()}>
            <div className="Studentoverlay-header">
                <h3>Add Students</h3>
                <button onClick={props.onClose} className="StudenteditBtn"><IoClose /></button>
            </div>
            <div class="row">
                <div class="col-6 col-sm-4">
                    <label for="name">Name:</label>
                    <input type="email" id="name"  name="name" />
                    <label for="email">Email:</label>
                    <input type="password" id="email" name="email" />
                </div>
                <div class="col-6 col-sm-4">
                    <label for="email">Mobile No:</label>
                    <input type="number" id="mobile" name="mobile" />     
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" />     
                </div>
                <div class="col-6 col-sm-4">
                    <label for="email">Add/Remove Students</label>
                    <input type="checkbox" id="check" name="mobile" />     
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" />     
                </div>
            </div>    
        </div>
    )
}
