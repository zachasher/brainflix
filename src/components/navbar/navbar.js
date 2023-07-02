import "./navbar.scss";

import logo from "../../assets/logos/BrainFlix-logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <img src={logo} alt="Brainflix Logo" className="nav__logo" />
      <div className="nav__container">
        <input
          type="search"
          placeholder="Search"
          className="nav__search"
          id="search-input"
        ></input>
        <button className="nav__upload-button1">UPLOAD</button>
        <div className="nav__avatar"></div>
      </div>
      <button className="nav__upload-button2">UPLOAD</button>
    </nav>
  );
}

export default Nav;
