import React ,{useState}from 'react';
import {BsThreeDotsVertical, FaClosedCaptioning} from "react-icons/all";
import EditClass from '../Edit/Editclass';
import EditTiming from '../Settiming/settiming';
import './threedotsDropdown.css';
const ThreeDotsdrop=()=>{
    const [show, setShow] = useState(false);
    const[time, setTime] =useState(false);
    return (
        <div className="">
        <div class="dropdown">
  <button className="btn " style={{boxShadow:"none"}} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    <BsThreeDotsVertical />
  </button>
  <div className="dropdown-menu p-1 mr-sm-5"  aria-labelledby="dropdownMenuButton">
    <a className="dropdown-item" type="button" data-toggle="modal" data-target="#exampleModalCenter4" href="#" onClick={() => setShow(true)} >Edit Class</a>
     <a className="dropdown-item" type="button" data-toggle="modal" data-target="#exampleModalCenter5" href="#" onClick={()=>setTime(true)}>Set Lecture Timing</a>
    <a className="dropdown-item" href="#">Delete Class</a>
  </div>
</div>
<div>
<EditClass show={show} setTrigger = {setShow}  /> 
</div>
<EditTiming time ={time} setTimer = {setTime} />

        </div>
      );
      
}
export default ThreeDotsdrop;