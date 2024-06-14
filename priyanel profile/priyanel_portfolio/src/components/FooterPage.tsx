import { FunctionComponent } from "react";
import styles from "./FooterPage.module.css";

export type FooterPageType = {
  className?: string;
};

const FooterPage: FunctionComponent<FooterPageType> = ({ className = "" }) => {
  return (
    <footer className={[styles.footerPage, className].join(" ")}>
      <img className={styles.homeIcon} loading="lazy" alt="" src="/home.svg" />
      <div className={styles.footerContent}>
        <div className={styles.privacyLink} />
        <div className={styles.footerLinks}>
          <div className={styles.homeLink}>
            <div className={styles.home}>Home</div>
            <img
              className={styles.userProfileIcon}
              loading="lazy"
              alt=""
              src="/frame-24.svg"
            />
            <div className={styles.contactLinks}>
              <div className={styles.contactIconsParent}>
                <div className={styles.contactIcons}>
                  <img
                    className={styles.userIcon}
                    loading="lazy"
                    alt=""
                    src="/user.svg"
                  />
                  <div className={styles.aboutMe}>About me</div>
                </div>
                <div className={styles.contactIcons1}>
                  <img
                    className={styles.phoneIcon}
                    loading="lazy"
                    alt=""
                    src="/phone.svg"
                  />
                  <div className={styles.contact}>Contact</div>
                </div>
              </div>
              <div className={styles.socialLinks}>
                <div className={styles.socialIcons}>
                  <img
                    className={styles.socialIconsChild}
                    loading="lazy"
                    alt=""
                    src="/frame-24.svg"
                  />
                  <img
                    className={styles.socialIconsItem}
                    loading="lazy"
                    alt=""
                    src="/frame-24.svg"
                  />
                  <img
                    className={styles.socialIconsInner}
                    loading="lazy"
                    alt=""
                    src="/frame-24.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.legal}>
        <div className={styles.termsOfService}>
          Terms of Service - Privacy Policy
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
