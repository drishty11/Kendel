import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/all";
import Editstudent from "../Editstudents/Editstudents";
const ThreedotsStudent = () => {
  const [edit, setEdit] = useState(false);
  return (
    <div className="">
      <div className="dropdown">
        <button
          style={{ boxShadow: "none" }}
          className="btn "
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <BsThreeDotsVertical />
        </button>
        <div
          className="dropdown-menu p-1 mr-sm-5"
          aria-labelledby="dropdownMenuButton"
        >
          <a type="button" data-toggle="modal" data-target="#exampleModalCenter9"  className="dropdown-item" href="#" onClick={() => setEdit(true)}>
            Edit
          </a>
          <a className="dropdown-item" href="#">
            Delete
          </a>
        </div>
      </div>
      <div>
        <Editstudent edit={edit} setTrigger={setEdit} />
      </div>
    </div>
  );
};
export default ThreedotsStudent;
