import React, { useState, useRef } from "react";
import styles from "./NavBar.module.css";
import udit_img from "../../assets/udit.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "block";
      menuRef.current.style.right = "0";
      setIsMenuOpen(true);
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.style.display = "none";
      setIsMenuOpen(false);
    }
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={udit_img} alt="Profile" />
        <span className={styles.logo_text}>Portfolio</span>
      </div>

      {/* Mobile Toggle Button */}
      <div className={styles.nav_mob_open} onClick={openMenu}>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 6H20M4 12H20M4 18H20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Navigation Menu */}
      <ul ref={menuRef} className={styles.nav_menu}>
        {/* Close button */}
        <div className={styles.nav_mob_close} onClick={closeMenu}>
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <li className={styles.nav_item}>
          <a href="#home">Home</a>
        </li>
        <li className={styles.nav_item}>
          <a href="#about">About Me</a>
        </li>
        <li className={styles.nav_item}>
          <a href="#services">Services</a>
        </li>
        <li className={styles.nav_item}>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className={styles.nav_item}>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className={styles.nav_connect}>Connect With Me</div>
    </div>
  );
};

export default Navbar;
