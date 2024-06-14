import { FunctionComponent } from "react";
import styles from "./HomePage.module.css";

export type HomePageType = {
  className?: string;
};

const HomePage: FunctionComponent<HomePageType> = ({ className = "" }) => {
  return (
    <section className={[styles.homePage, className].join(" ")}>
      <header className={styles.homePageChild} />
      <div className={styles.homePageItem} />
      <div className={styles.homePageInner} />
      <div className={styles.content}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeContainer}>
            <div className={styles.nameContainer}>
              <h1 className={styles.chiaynePriyanelPahalahendricContainer}>
                <span>
                  <span className={styles.chiaynePriyanel}>
                    Chiayne Priyanel
                  </span>
                  <span className={styles.span}>{` `}</span>
                </span>
                <span className={styles.pahalahendricge}>Pahalahendricge</span>
              </h1>
              <div className={styles.helloitsmeParent}>
                <div className={styles.helloitsme}>Hello! It’s Me</div>
                <div className={styles.hireMeButtonContainer}>
                  <div className={styles.frameParent}>
                    <button className={styles.hireMeWrapper}>
                      <b className={styles.hireMe}>Hire me</b>
                    </button>
                    <div className={styles.frameWrapper}>
                      <button className={styles.downloadCvParent}>
                        <b className={styles.downloadCv}>Download CV</b>
                        <img
                          className={styles.downloadIcon}
                          alt=""
                          src="/download.svg"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className={styles.aboutMeChild}
            loading="lazy"
            alt=""
            src="/frame-7.svg"
          />
        </div>
        <div className={styles.contentInner}>
          <div className={styles.homeParent}>
            <div className={styles.home}>Home</div>
            <div className={styles.aboutMeLinkContainer}>
              <div className={styles.aboutMe1}>About Me</div>
            </div>
            <div className={styles.contactLinkContainer}>
              <div className={styles.contact}>Contact</div>
            </div>
            <div className={styles.icons}>
              <img className={styles.iconsChild} alt="" src="/ellipse-3.svg" />
              <img
                className={styles.doodlesMixedRound}
                loading="lazy"
                alt=""
                src="/doodles-mixed-round.svg"
              />
              <div className={styles.gradient} />
              <img
                className={styles.tpvi2ja6xtmekwe53znquTransforIcon}
                alt=""
                src="/tpvi2ja6xtmekwe53znqutransformed1-1@2x.png"
              />
              <img
                className={styles.iconsItem}
                loading="lazy"
                alt=""
                src="/vector-187.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.skills}>
        <div className={styles.wrapperEllipse8}>
          <img className={styles.wrapperEllipse8Child} alt="" />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
