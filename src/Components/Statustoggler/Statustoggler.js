import React, { useState } from "react";
import Ellipse from "../../images/Ellipse.svg";
import "./Statustoggler.css";
function Statustoggler() {
  const [toggle, setToggle] = useState('Absent');
  return (
    <div>
      <div className="form-check form-switch">
        {toggle === 'Absent'  ?
        <input
          className="form-check-input switch-toggle overflow-auto  "
          style={{
            width: "80px",
            height: "26px",
            marginLeft: "-65px",
            boxShadow: "none",
            backgroundImage: `url(${Ellipse})`,
            backgroundRepeat: "no-repeat",
          }}
          type="checkbox"
          id="flexSwitchCheckChecked"
        /> : ''
        }
      </div>
    </div>
  );
}

export default Statustoggler;
