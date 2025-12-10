import React from "react";
import styles from "./About.module.css";
import udit_img from "../../assets/udit.jpeg";

const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.about_title}>
        <h1 className={styles.heading}>About me</h1>
      </div>
      <div className={styles.about_section}>
        <div className={styles.about_left}>
          <img src={udit_img} alt="Profile" />
        </div>
        <div className={styles.about_right}>
          <div className={styles.about_para}>
            <p>
              Developer with a focus on building high-quality, user-focused web
              and mobile applications. Expertise includes API integration,
              performance tuning, and creating responsive UI layouts using
              modern JavaScript frameworks.
            </p>
          </div>
          <div className={styles.about_skills}>
            <div className={styles.about_skill}>
              <p>HTML & CSS</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "70%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>React Js</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>JavaScript</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "75%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>Next Js</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className={styles.about_skill}>
              <p>React Native</p>
              <div className={styles.skill_bar_container}>
                <div
                  className={styles.skill_bar_fill}
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.about_achievements}>
        <div className={styles.about_achievement}>
          <h1>3+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <div className={styles.achievement_divider}></div>
        <div className={styles.about_achievement}>
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <div className={styles.achievement_divider}></div>
        <div className={styles.about_achievement}>
          <h1>5+</h1>
          <p>TECHONOLOGIES MASTERED</p>
        </div>
      </div>
    </div>
  );
};

export default About;
