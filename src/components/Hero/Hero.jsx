import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Akash Anand</h1>
        <p className={styles.description}>
          Software engineer with 2 years of experience, building responsive and
          innovative web & backend solutions.
        </p>
        <a href="mailto:akashanand330@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>

      <div className={styles.imageWrapper}>
        <div className={styles.imageBlob} />
        <img
          src={getImageUrl("hero/heroImage.png")}
          alt="Hero"
          className={styles.heroImg}
        />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
