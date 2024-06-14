import { FunctionComponent } from "react";
import styles from "./ContactPage.module.css";

export type ContactPageType = {
  className?: string;
};

const ContactPage: FunctionComponent<ContactPageType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.contactPage, className].join(" ")}>
      <div className={styles.contactPageChild} />
      <img
        className={styles.mailIcon}
        loading="lazy"
        alt=""
        src="/mail@2x.png"
      />
      <img
        className={styles.keyboardIcon}
        loading="lazy"
        alt=""
        src="/keyboard@2x.png"
      />
      <div className={styles.contactPageInner}>
        <div className={styles.skillsTitleContainerParent}>
          <div className={styles.skillsTitleContainer}>
            <div className={styles.skills}>SKILLS</div>
          </div>
          <div className={styles.portfolioDescriptionContaine}>
            <div className={styles.iAmPleasedContainer}>
              <span>{`I am pleased to present a comprehensive portfolio highlighting my proficiency across diverse domains, encompassing `}</span>
              <b className={styles.programmingLanguages}>
                programming languages
              </b>
              <span>{`, `}</span>
              <b className={styles.tools}>tools</b>
              <span>{`, `}</span>
              <b className={styles.frameworks}>frameworks</b>
              <span>{`, `}</span>
              <b className={styles.concepts}>concepts</b>
              <span>{`, `}</span>
              <b className={styles.cloudServices}>cloud services</b>
              <span>{`, and essential `}</span>
              <b className={styles.softSkills}>soft skills</b>
              <span>.</span>
            </div>
            <div className={styles.softSkillsContainer}>
              <b className={styles.softSkills1}>soft skills</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.leftSkills}>
        <div className={styles.hireButtonParent}>
          <div className={styles.hireButton} />
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/vector-186-1.svg"
          />
          <div className={styles.gradient} />
        </div>
      </div>
      <div className={styles.contactPageItem} />
    </section>
  );
};

export default ContactPage;
