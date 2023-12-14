import React from "react";
import { styles } from "@styles/sharedStyles";

const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
  function HigherOrderComponent() {
    return (
      <section className={`container ${styles.paddingY}`}>
        <span id={idName}></span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
