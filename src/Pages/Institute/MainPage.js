import React from 'react';
import top1 from '../../images/Group 223.png';
import top2 from '../../images/Group 221.png';
import why from '../../images/Group 225.png';
import whycircle from '../../images/Group 227.png';
import fourthcircle from '../../images/expert faculty.png';
import fifth from '../../images/study mat.png';
import sixth from '../../images/doubt solving.png';
import stillthinking from '../../images/Group 235.png';
import './MainPage.css';
// import Navbar from '../../Components/Navbar/Navbar';

export default function MainPage({toggleSidebar,sidebarOpen}) {
    return (
        <div className="d-flex flex-column mainpage">
            {/* <div> */}
                <div className="d-flex justify-content-between align-items-start column position-relative w-100" style={{ height: '600px'}}>
                    <div className="d-flex flex-column row first-container position-absolute first" style={{ width: '58%'}}>
                        <img src={top1} alt="top2" className="d-flex p-0 topimage" style={{height: '548px'}} />
                        <div className="d-flex flex-column justify-content-start align-items-start position-absolute text-white inner-work p-4" style={{ width: '56%', marginLeft: '55px'}}>
                            <p className="mb-5" style={{ fontSize: '20px'}}>Kendel Institute</p>
                            <div className="d-flex flex-column justify-content-evenly align-items-start">
                                <div className="mt-5">
                                    <p className="mb-4" style={{ fontSize: '20px'}}>About Us</p>
                                    <p style={{ fontSize: '12px'}}>I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills. 
                                    I am friendly, helpful and polite, have a good sense of humour. I am able to work independently 
                                    in busy environments and also within a team setting. I am outgoing and tactful, and able to listen effectively 
                                    when solving problems.I am a punctual and motivated individual who is able to work in a busy environment 
                                    and produce high standards of work. I am an excellent team worker and am able to take instructions from 
                                    all levels and build up good working relationships with all colleagues. I am flexible, reliable and 
                                    possess excellent time keeping skills.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-md-flex flex-column first-container position-absolute d-none" style={{right: '0'}}>
                        <img src={top2} alt="top1" className="d-flex p-0 topimage" />
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-center align-items-center mb-5 mx-1">
                    <div className="d-flex flex-column justify-content-start align-items-start second-container mr-2 mr-md-4">
                        <p className="second-container-heading text-white p-2 mb-0">Courses</p>
                        <ul className="mb-0 py-2 d-flex flex-column justify-content-start align-items-start">
                            <li className="mb-1">JEE</li>
                            <li className="mb-1">NEET</li>
                            <li className="mb-1">+2 Medical CBSE</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start second-container mr-2 mr-md-4">
                        <p className="second-container-heading text-white p-2 mb-0">Subjects</p>
                        <ul className="mb-0 py-2 d-flex flex-column justify-content-start align-items-start">
                            <li className="mb-1">Chemistry</li>
                            <li className="mb-1">Maths</li>
                            <li className="mb-1">Physics</li>
                        </ul>
                    </div>
                    <div className="d-flex flex-column justify-content-start align-items-start second-container">
                        <p className="second-container-heading text-white p-2 mb-0">Teaching Mode</p>
                        <ul className="mb-0 py-2 d-flex flex-column justify-content-start align-items-start">
                            <li>Online</li>
                        </ul>
                    </div>
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center position-relative why-container" style={{color: '#063DB5'}}>
                    <img src={whycircle} alt="whycircle" className="position-absolute" style={{ left: '0', top: '-80px'}} />
                    <h4 className="d-flex">Why Kendel<p className="why" style={{marginLeft: '8px'}}>Institute?</p></h4>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="d-flex flex-column third-container" style={{ marginLeft: '300px'}}>
                            <p style={{ fontSize: '20px', color: '#063DB5', fontWeight: '600'}}>Individual Attention</p>
                            <ul>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                            </ul>
                            <button className="d-flex justify-content-center align-items-center border-0 p-3">Start Learning</button>
                        </div>
                        <div className="d-flex align-items-start third-container">
                            <img src={why} alt="why" style={{width: '450px'}} className="third-img" />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{color: '#063DB5'}}>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="d-flex align-items-start fourth-container">
                            <img src={fourthcircle} alt="fourthcircle" className="fourth-img" style={{width: '450px'}} />
                        </div>
                        <div className="d-flex flex-column fourth-container" style={{ marginRight: '300px'}}>
                            <p style={{ fontSize: '20px', color: '#063DB5', fontWeight: '600'}}>Expert Faculty</p>
                            <ul>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                            </ul>
                            <button className="d-flex justify-content-center align-items-center border-0 p-3">Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{color: '#063DB5'}}>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="d-flex flex-column fifth-container" style={{ marginLeft: '300px'}}>
                            <p style={{ fontSize: '20px', color: '#063DB5', fontWeight: '600'}}>Updated Study Material</p>
                            <ul>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                            </ul>
                            <button className="d-flex justify-content-center align-items-center border-0 p-3">Start Learning</button>
                        </div>
                        <div className="d-flex align-items-start fifth-container">
                            <img src={fifth} alt="sixth" className="fifth-img" style={{width: '450px'}} />
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row" style={{color: '#063DB5'}}>
                    <div className="d-flex flex-row justify-content-between align-items-center w-100">
                        <div className="d-flex align-items-start sixth-container">
                            <img src={sixth} alt="sixth" className="sixth-img" style={{width: '450px'}} />
                        </div>
                        <div className="d-flex flex-column sixth-container" style={{ marginRight: '300px'}}>
                            <p style={{ fontSize: '20px', color: '#063DB5', fontWeight: '600'}}>Expert Faculty</p>
                            <ul>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                                <li>Learn from experienced JEE faculty to improve understanding and retention of concepts</li>
                            </ul>
                            <button className="d-flex justify-content-center align-items-center border-0 p-3">Start Learning</button>
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center align-items-center mx-auto position-relative text-white" style={{ height: '150px'}}>
                    <img src={stillthinking} alt="stillthinking" className="still-img" />
                    <div className="d-flex flex-row justify-content-center align-items-center position-absolute w-100 stillthinking" style={{ bottom: '36px' }}>
                        <div className="mr-5">
                            <h3>Still Thinking ?</h3>
                            <p style={{fontSize: '11px'}}>Don't Worry. Come & Learn With Us</p>
                        </div>
                        <div>
                            <button className="d-flex justify-content-center align-items-center border-0 bg-white text-black p-2" style={{fontSize: '12px'}}>Book a Free Demo</button>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <button></button>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <button></button>
                </div> */}
                <div className="d-flex flex-column justify-content-start last-section align-items-start mt-5" style={{marginLeft: '245px',height: '160px', color: '#063DB5'}}>
                    <div className="d-flex flex-row mb-3">
                        <h4 className="d-flex flex-row">Feel Free <p className="ml-2 query">to ask your Query</p></h4>
                    </div>
                    <div className="d-flex flex-row last-sectionbtn mb-3">
                        <button style={{fontSize: '11px'}} className="d-flex justify-content-center align-items-center bg-white mr-4">WhatsApp</button>
                        <button style={{fontSize: '11px'}} className="d-flex justify-content-center align-items-center bg-white">Call</button>
                    </div>
                    <p style={{fontSize: '10px'}} >Address:</p>
                </div>
                <footer className="mx-auto"  style={{ height: '80px'}}>
                    <h6 style={{fontSize: '13px'}}>@Created by Kendel Website Builder</h6>
                </footer>
            {/* </div> */}
        </div>    
    )
}
