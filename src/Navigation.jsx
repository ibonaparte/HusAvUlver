import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const navElements = ["About", "Roster", "Scores", "Highlights"];
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <a href="#" id="hamburger-menu-icon" onClick={() => setOpen(!open)}>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
          <div className="hamburger-line"></div>
        </a>

        <div className="nav-logo-container">
          <Link to="/" className="nav-logo">
            <img
              className="logo-img"
              src="https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/custom-crests/22.png"
              alt="Coyotes Logo used by Hus Av Ulver"
            />
          </Link>
          <span className="nav-title">Hus Av Ulver</span>
        </div>
        <ul className={open ? "nav-links open" : "nav-links closed"}>
          {navElements.map((navElement) => (
            <li key={navElement} className="nav-item">
              <Link to={`/${navElement}`} onClick={() => setOpen(!open)}>
                {navElement}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={open ? "overlay open" : "overlay closed"}
        onClick={() => setOpen(!open)}
      ></div>
    </>
  );
};

export default Navigation;
