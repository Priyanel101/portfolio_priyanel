import { FunctionComponent } from "react";
import styles from "./AboutMePage.module.css";

export type AboutMePageType = {
  className?: string;
};

const AboutMePage: FunctionComponent<AboutMePageType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.aboutMePage, className].join(" ")}>
      <div className={styles.aboutMePageChild} />
      <div className={styles.aboutMePageItem} />
      <div className={styles.frameParent}>
        <div className={styles.aboutMeWrapper}>
          <h1 className={styles.aboutMe}>
            <span>About</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.me}>me</span>
          </h1>
        </div>
        <b className={styles.iAmHighly}>
          I am highly motivated to learn and gain practical experience,
          particularly in the dynamic field of cloud technology. My enthusiasm
          drives me to explore every facet of technology, contributing to a
          valuable and innovative work environment.
        </b>
      </div>
      <div className={styles.gradientParent}>
        <div className={styles.gradient} />
        <div className={styles.frameChild} />
        <img
          className={styles.doodleItemsIcon}
          alt=""
          src="/doodle-items.svg"
        />
        <img
          className={styles.lightbulbIcon}
          loading="lazy"
          alt=""
          src="/lightbulb@2x.png"
        />
        <img className={styles.frameItem} alt="" src="/group-62@2x.png" />
      </div>
    </section>
  );
};

export default AboutMePage;
