import { useState } from "react";

const Navigation = () => {
  const navElements = ["About", "Roster", "Stats", "Highlights"];
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
          <a className="nav-logo" href="/">
            <img
              className="logo-img"
              src="https://media.contentapi.ea.com/content/dam/eacom/nhl/pro-clubs/custom-crests/22.png"
              alt="Coyotes Logo used by Hus Av Ulver"
            />
          </a>
          <span className="nav-title">Hus Av Ulver</span>
        </div>
        <ul className={open ? "nav-links open" : "nav-links closed"}>
          {navElements.map((navElement) => (
            <li className="nav-item">
              <a href="#" onClick={() => console.log("Nav Click")}>
                {navElement}
              </a>
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
