import { FunctionComponent } from "react";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.keyboardParent, className].join(" ")}>
      <img className={styles.keyboardIcon} alt="" src="/keyboard1@2x.png" />
      <div className={styles.wrapperBento}>
        <img className={styles.bentoIcon} alt="" src="/bento1@2x.png" />
      </div>
      <div className={styles.wrapperBento2}>
        <img className={styles.bento2Icon} alt="" src="/bento2@2x.png" />
      </div>
      <div className={styles.lightbulbIconParent}>
        <div className={styles.lightbulbIcon} />
        <img className={styles.frameChild} alt="" src="/vector-186-1.svg" />
        <div className={styles.wrapperGroup5}>
          <img
            className={styles.wrapperGroup5Child}
            alt=""
            src="/group-5@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
