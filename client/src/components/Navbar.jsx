import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import virtualWoof from "../images/virtualWoof.png";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <img className="menu" src={virtualWoof} alt="virtualWoof" />
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Woofs
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/task"
            >
              Task
            </NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
