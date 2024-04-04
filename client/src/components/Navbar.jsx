import React from "react";
import styles from "./NavBar.module.css";
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
            ></NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? styles.active : "")}
              to="/task"
            ></NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
