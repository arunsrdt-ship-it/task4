import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/table");
  };

  const handleClicktwo = () => {
    navigate("/table2");
  };

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="top-navbar">
      <ul className="nav-list">
        <li>
          <a onClick={handleHome}>Home</a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Main</a>
        </li>
        <li>
          <a href="">Footer</a>
        </li>
        <li className="dropdown">
          <a href="">DropDown</a>
          <div className="drop-list">
            <a onClick={handleClick}>Products</a>
            <a onClick={handleClicktwo}>Link2</a>
            <a href="">Link3</a>
          </div>
        </li>
      </ul>

      <div className="right-side">
        <input id="box" className="input-box" type="text" placeholder="Enter your text" />
        <button className="search-box">Search</button>
      </div>
      <a href="" className="nav-toggle">
        <FontAwesomeIcon icon={faBars} />
      </a>
    </div>
  );
}

export default Navbar;
