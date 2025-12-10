import React from "react";
import styles from "./ContactUs.module.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const ContactUs = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contact_title}>
        <h1>Get in Touch</h1>
        <img
          src={theme_pattern}
          alt="pattern"
          className={styles.title_pattern}
        />
      </div>
      <div className={styles.contact_section}>
        <div className={styles.contact_left}>
          <h1>Let's talk</h1>
          <p>
            I'm currently available to take on new projects and employment
            opportunities. Whether you have a question about my tech stack
            (React, Next.js, SQL), or want to discuss a potential collaboration.
          </p>
          <div className={styles.contact_details}>
            <div className={styles.contact_detail}>
              <img src={mail_icon} alt="Mail" />
              <p>uditm9699@gmail.com</p>
            </div>
            <div className={styles.contact_detail}>
              <img src={call_icon} alt="Call" />
              <p>+91 8860193421</p>
            </div>
            <div className={styles.contact_detail}>
              <img src={location_icon} alt="Location" />
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>
        <form className={styles.contact_right}>
          <div className={styles.form_group}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className={styles.form_group}>
            <label htmlFor="message">Write your message here</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button type="submit" className={styles.contact_submit}>
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
