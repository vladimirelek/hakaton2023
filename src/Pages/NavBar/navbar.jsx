import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimneyWindow } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  return (
    <Fragment>
      <div className="navbar">
        <div className="navbar__title">
          <Link to={"/"} className="navbar__logo">
            <FontAwesomeIcon icon={faHouseChimneyWindow}></FontAwesomeIcon>
          </Link>
        </div>
        <div className="navbar__links">
          <Link to={"/login"} className="navbar__link">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default NavigationBar;
