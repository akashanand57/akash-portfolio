import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Software.jpg")}
          alt="Me working on a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend </h3>
              <p>
                With 2 years of experience in frontend development, I build
                responsive, interactive, and optimized web interfaces using
                modern frameworks like React and Angular.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend </h3>
              <p>
                Experienced in designing and developing robust back-end
                systems and RESTful APIs using Node.js, Spring Boot, and
                other modern technologies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Database icon" />
            <div className={styles.aboutItemText}>
              <h3>Database</h3>
              <p>
                Skilled in database design and management, ensuring efficient
                data access, integrity, and performance using MySQL, MongoDB,
                PostgreSQL, and Oracle.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
