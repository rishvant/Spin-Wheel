import React, { useState, useRef } from "react";
import Chevron from "./Chevron";

import styles from  "./styles.module.css";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  return (
    <div className={`${styles.accordion__section} w-[90%] mt-8 border-2 border-gray-400 rounded-2xl`}>
      <button className={`${styles.accordion} rounded-2xl ${setActive}`} onClick={toggleAccordion}>
        <p className={styles.accordion__title}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${styles.accordion__content} rounded-2xl`}
      >
        <div
          className={styles.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;