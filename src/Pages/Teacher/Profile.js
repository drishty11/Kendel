import React, { useState } from "react";
import "./Profile.css";
import Navbar  from '../../Components/Navbar/Navbar';

import { ImPhone, IoMdMail, IoCamera } from 'react-icons/all';

export default function Profile({ sidebarOpen, toggleSidebar }) {

    const [photo, setPhoto] = useState('');
    // const [Isuploaded, setIsUploaded] = useState();
    function handlePreview(e) {
        if (e.target.files) {
          const imgFile = URL.createObjectURL(e.target.files[0]);
          setPhoto(imgFile);
          console.log(imgFile);
        }
      }
    
  return (
    <div id="page-content-wrapper">
      <Navbar title={'Profile'} toggleSidebar={toggleSidebar} />
      <div id="profile" className={`container-fluid px-4 pt-5 ${sidebarOpen ? 'sidebarActive' : ''}`}>
                    
                        <div className="bg-white boxes overflow-hidden mt-5">
                            <div className="px-4 pt-0 pb-0 cover">
                                <div className="media align-items-end profile-head">
                                    <label className="profile mr-3 mb-4 primary-bg">
                                        <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " onChange={handlePreview} />
                                        {photo === '' ? (
                                        <label className="profile mr-3 mb-4 primary-bg"> 
                                            <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className=" mt-5 " onChange={handlePreview} />
                                        </label>) : (  
                                        <img  src={photo} alt="image1" className="profile mr-3 mb-4" />
                                        )}
                                    </label>
                                    <label className="label d-flex align-items-center justify-content-center" >
                                        <input type="file" id="image" accept=".jpg, .jpeg, .png, .mov, .mp4" hidden className="" onChange={handlePreview} />
                                        <IoCamera size={32} /></label>
                                </div>
                            </div>
                            <div className="bg-light pt-5 pb-4 px-4 d-flex flex-column justify-content-end text-center">
                                <div className="media-body mb-3 mt-4 text-black text-left">
                                    <h4 className="mt-0 mb-0">Aarav Negi</h4>
                                    <p className="small mb-4">Designation,MM3 institue</p>
                                </div>
                                <ul className="d-flex flex-column flex-md-row text-left p-0 mb-0">
                                    <li className="d-flex flex-row mr-4">
                                        <ImPhone size={22} className="mr-2"  />
                                        <h5 className="mb-0 d-block">7658349812</h5>
                                    </li>
                                    <li class="d-flex flex-row mr-4">
                                        <IoMdMail size={22} className="mr-2" />
                                        <h5 className="mb-0 d-block">drishty@gmail.com</h5>
                                    </li>
                                </ul>
                            </div>
                        </div>
                </div>  
    </div>
  );
}
