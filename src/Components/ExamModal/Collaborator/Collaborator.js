import React, { useState } from 'react';
import Navbar from '../../Navbar/Navbar';
import { ExamNavbar } from '../../ExamNavbar/ExamNavbar';
import { DownArrow } from '../../../images/Icons/icons';
import {  MdDelete } from 'react-icons/all';
import './Collaborator.css';

export default function Collaborator({ toggleSidebar, sidebarOpen, close }) {

    const mails = [
        {
            teachermail: 'abc@gmail.com'
        },
        {
            teachermail: 'abcdef@gmail.com'
        },
    ]
    
    const [addMail, setAddmail] = useState(false);
    const [selectedmail, setSelectedmail] = useState('');
    const [collabmails, setcollabMails] = useState([]);

    const addSelectedMail = () => {
        if (selectedmail !== '') {
            setcollabMails((prevState) => [...prevState,selectedmail])  
            setSelectedmail('')
        }
    }
    // const [collaborator,setCollaborator] = useState(false)

   
    return (
            <div class="collab position-absolute text-black">
                <div className="d-flex flex-column">
                    <h6 className="mb-3" style={{ color: '#063DB5'}}>Collaborator</h6>
                    <div className="d-flex flex-row justify-content-between align-items-center text-black mb-3">
                        <div className="d-flex flex-column position-relative">
                            <div className="d-flex flex-row justify-content-between align-items-center pointer" onClick={() => setAddmail(!addMail)}  style={{borderBottom: '0.5px solid #464353'}}>
                                <input type="text" className="mb-0 border-0 bg-transparent" value={selectedmail} style={{ height: '35px', width: '100px', fontSize: '12px' }} placeholder="Select Teacher" />
                                <DownArrow  />
                            </div>
                            {addMail ? 
                            <div className="d-flex flex-column justify-content-start align-items-start position-absolute selected  py-2" style={{ top: '35px'}}>
                                {mails.map((mail,index) => ( <h6 onClick={async () => {setSelectedmail(mail.teachermail); setAddmail(false) }} className="pointer" key={index}>{mail.teachermail}</h6> ))}
                            </div>
                             : ''}
                        </div>
                        <button className="d-flex justify-content-center align-items-center bg-white add-button" onClick={addSelectedMail}>Add</button>
                    </div>
                    <div className="overflow-auto mb-3" style={{ height: '140px'}}>
                        {collabmails.map((mail,index) => {
                            return (
                                <div key={index} className="d-flex flex-row justify-content-between align-items-center mail mb-2">
                                    <h6 className="mb-0">{mail}</h6>
                                    <div onClick={() => setcollabMails((prevState) => prevState.filter((prev,i) => i !== index))} className="d-flex pointer" style={{ height: '20px'}}>
                                        <MdDelete style={{ fontSize: '22px'}} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    <div className="w-100 d-flex justify-content-center align-items-center">
                        <button type="button" className="d-flex justify-content-center align-items-center text-white border-0 save-button" onClick={close}>Save</button>
                    </div>
                </div>
            </div>
        
    )
}
