import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "./navbar.scss";

import logo from "../../assets/logos/BrainFlix-logo.svg";

function Nav() {
  const navigate = useNavigate();

  return (
    <nav className="nav">
      <Link  to={`/home`}>
        <img src={logo} alt="Brainflix Logo" className="nav__logo" />
      </Link>
      <div className="nav__container">
        <input
          type="search"
          placeholder="Search"
          className="nav__search"
          id="search-input"
        ></input>
        <button
          onClick={() => {
            navigate("/upload");
          }}
          className="nav__upload-button1"
        >
          UPLOAD
        </button>
        <div className="nav__avatar"></div>
      </div>
      <button
        onClick={() => {
          navigate("/upload");
        }}
        className="nav__upload-button2"
      >
        UPLOAD
      </button>
    </nav>
  );
}

export default Nav;
