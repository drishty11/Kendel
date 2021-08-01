import React from 'react';
import {
  IoNotificationsOutline,
  BiUser,
  FiLogOut,
} from "react-icons/all";
import images from "../../images/userimg.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import logo  from "../../images/4_light_bg.png";
import './Navbar.css';
export default function Navbar({title, toggleSidebar}) {
    return (
        <nav className="topNav navbar navbar-expand-md navbar-light justify-content-between flex-nowrap primary-bg py-3 pl-4 pr-4 pr-lg-5 py-md-2 position-fixed">
        
        <div className="d-flex flex-row align-items-center">
          <h2 className="h5 m-0 d-none d-md-block">{title}</h2>
          <div className="d-md-none d-flex">
             <img src={logo} alt="logo" className="logo" width="130px" />
          </div>
        </div>

        <div
          className="d-flex justify-content-end align-items-center pointer"
          id="collapsibleNavbar"
        >
          <IoNotificationsOutline className="d-flex icon" />
          <ul className="navbar-nav ml-4 mb-lg-0 ">
            <li class="nav-item dropdown d-flex d-lg-flex align-items-start">
              <img
                width="40"
                height="40"
                className="user-img rounded-full rounded-md d-none d-md-block"
                src={images}
                alt="user"

              />
              <div className="dropdown d-md-none">
                <a type="text" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img
                    width="40"
                    height="40"
                    className="user-img rounded-full rounded-md "
                    src={images}
                    alt="user"
                  />
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/">
                    <BiUser />
                    My Profile
                  </a>

                  <a className="dropdown-item" href="/">
                    <FiLogOut />
                    Logout
                  </a>
                </div>
              </div>
              <a
                className="d-md-flex flex-md-column ml-3 h6 text-decoration-none d-none mb-0"
                href="/"
                id="navbarDropdown"
              >
                {" "}
                Direction Educare
                <span>Admin</span>
              </a>
              <button
                className="d-md-none rounded ml-3 border-0 bg-white h3"
                type="button"
                onClick={() => toggleSidebar()}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <Dropdown className="d-none d-md-flex">
                <Dropdown.Toggle className="shadow-none border-0 d-flex" variant="none" id="dropdown-basic">
                </Dropdown.Toggle>

                <Dropdown.Menu className="dropdowntop">
                  <Dropdown.Item href="/Profile">
                    <BiUser />
                    My Profile
                  </Dropdown.Item>
                  <Dropdown.Item href="/Logout">
                    <FiLogOut />
                    Logout
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            </li>

          </ul>
        </div>
      </nav>
    )
}
