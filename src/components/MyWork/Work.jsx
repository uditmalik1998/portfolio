import React from "react";
import styles from "./Work.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";

const MyWork = () => {
  return (
    <div className={styles.mywork}>
      <div className={styles.title}>
        <h1>My Latest Work</h1>
        <img
          src={theme_pattern}
          alt="Theme Pattern"
          className={styles.title_pattern}
        />
      </div>
      <div className={styles.mywork_container}>
        {mywork_data.map((work, index) => (
          <div key={work.w_no || index} className={styles.work_card}>
            <img src={work.w_img} alt={work.title || "Project"} />
            <div className={styles.overlay}>
              <h3>Project {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.mywork_showmore}>
        <p>Show More</p>
        <img src={arrow_icon} alt="Arrow" />
      </div>
    </div>
  );
};

export default MyWork;
