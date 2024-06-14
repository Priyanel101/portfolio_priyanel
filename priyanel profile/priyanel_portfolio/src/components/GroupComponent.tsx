import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: FunctionComponent<GroupComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.mailParent, className].join(" ")}>
      <img className={styles.mailIcon} alt="" src="/mail@2x.png" />
      <div className={styles.svgSpinners3DotsBounce} />
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <img className={styles.frameIcon} alt="" src="/frame.svg" />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.frameItem} />
        <img className={styles.frameIcon1} alt="" src="/frame1.svg" />
      </div>
      <div className={styles.initials}>
        <div className={styles.initialsChild} />
        <img className={styles.ec21Icon} alt="" src="/ec2-1.svg" />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.frameInner} />
        <img className={styles.frameIcon2} alt="" src="/frame2.svg" />
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.rectangleDiv} />
        <img className={styles.frameIcon3} alt="" src="/frame3.svg" />
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.frameChild1} />
        <img className={styles.frameIcon4} alt="" src="/frame4.svg" />
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.frameChild2} />
        <img className={styles.frameIcon5} alt="" src="/frame5.svg" />
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.frameChild3} />
        <img className={styles.frameIcon6} alt="" src="/frame6.svg" />
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.frameChild4} />
        <img className={styles.frameIcon7} alt="" src="/frame7.svg" />
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.frameChild5} />
        <img className={styles.frameIcon8} alt="" src="/frame8.svg" />
      </div>
      <div className={styles.rectangleParent6}>
        <div className={styles.frameChild6} />
        <img className={styles.frameIcon9} alt="" src="/frame9.svg" />
      </div>
      <div className={styles.rectangleParent7}>
        <div className={styles.frameChild7} />
        <img className={styles.frameIcon10} alt="" src="/frame10.svg" />
      </div>
      <div className={styles.rectangleParent8}>
        <div className={styles.frameChild8} />
        <img className={styles.frameIcon11} alt="" src="/frame11.svg" />
      </div>
      <div className={styles.rectangleParent9}>
        <div className={styles.frameChild9} />
        <img className={styles.frameIcon12} alt="" src="/frame12.svg" />
      </div>
      <div className={styles.rectangleParent10}>
        <div className={styles.frameChild10} />
        <img className={styles.frameIcon13} alt="" src="/frame13.svg" />
      </div>
      <div className={styles.rectangleParent11}>
        <div className={styles.frameChild11} />
        <img className={styles.frameIcon14} alt="" src="/frame14.svg" />
      </div>
      <div className={styles.rectangleParent12}>
        <div className={styles.frameChild12} />
        <img className={styles.frameIcon15} alt="" src="/frame15.svg" />
      </div>
      <div className={styles.rectangleParent13}>
        <div className={styles.frameChild13} />
        <img className={styles.frameIcon16} alt="" src="/frame16.svg" />
      </div>
      <div className={styles.rectangleParent14}>
        <div className={styles.frameChild14} />
        <img className={styles.frameIcon17} alt="" src="/frame17.svg" />
      </div>
      <div className={styles.rectangleParent15}>
        <div className={styles.frameChild15} />
        <img className={styles.frameIcon18} alt="" src="/frame18.svg" />
      </div>
      <div className={styles.rectangleParent16}>
        <div className={styles.frameChild16} />
        <img className={styles.frameIcon19} alt="" src="/frame19.svg" />
      </div>
      <div className={styles.rectangleParent17}>
        <div className={styles.frameChild17} />
        <img className={styles.frameIcon20} alt="" src="/frame20.svg" />
      </div>
      <div className={styles.rectangleParent18}>
        <div className={styles.frameChild18} />
        <img className={styles.frameIcon21} alt="" src="/frame21.svg" />
      </div>
      <div className={styles.rectangleParent19}>
        <div className={styles.frameChild19} />
        <img className={styles.frameIcon22} alt="" src="/frame22.svg" />
      </div>
      <div className={styles.rectangleParent20}>
        <div className={styles.frameChild20} />
        <img className={styles.frameIcon23} alt="" src="/frame23.svg" />
      </div>
      <div className={styles.rectangleParent21}>
        <div className={styles.frameChild21} />
        <img className={styles.frameIcon24} alt="" src="/frame24.svg" />
      </div>
      <div className={styles.moreContainer}>
        <div className={styles.moreContainerChild} />
        <div className={styles.moreParent}>
          <div className={styles.more}>MORE!</div>
          <div className={styles.more1}>MORE!</div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
