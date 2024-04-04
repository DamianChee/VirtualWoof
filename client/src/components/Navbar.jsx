import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/main"
            >
              Main
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/task"
            >
              Task
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
