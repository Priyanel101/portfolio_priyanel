import { FunctionComponent } from "react";
import HomePage from "../components/HomePage";
import AboutMePage from "../components/AboutMePage";
import ContactPage from "../components/ContactPage";
import GroupComponent from "../components/GroupComponent";
import FrameComponent from "../components/FrameComponent";
import FooterPage from "../components/FooterPage";
import styles from "./FinalDesign.module.css";

const FinalDesign: FunctionComponentFinalDesignType = () => {
  return (
    <div className={styles.finalDesign}>
      <HomePage />
      <AboutMePage />
      <ContactPage />
      <section className={styles.contactPage}>
        <div className={styles.contactPageChild} />
        <div className={styles.contactPageItem} />
        <div className={styles.wrapperBentoParent}>
          <div className={styles.wrapperBento}>
            <img className={styles.bentoIcon} alt="" src="/bento@2x.png" />
          </div>
          <GroupComponent />
        </div>
        <FrameComponent />
      </section>
      <FooterPage />
    </div>
  );
};

export default FinalDesign;
