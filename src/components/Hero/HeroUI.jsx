import React from "react";
import styles from "./HeroUI.module.css";
import udit_img from "../../assets/udit.jpeg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img className={styles.avatar_logo} src={udit_img} alt="hero" />
      <h1 className={styles.hero_heading}>
        <span className={styles.name}>I'm Udit Malik,</span> frontend developer
        based in India.
      </h1>
      <p className={styles.subheading}>
        Results-oriented Developer specializing in the React ecosystem (Next.js,
        React.js, React Native). Proven track record of architecting scalable
        web and mobile applications.
      </p>
      <div className={styles.hero_action}>
        <div className={styles.hero_connect}>Connect with me</div>
        <div className={styles.hero_resume}>My resume</div>
      </div>
    </div>
  );
};

export default Hero;
