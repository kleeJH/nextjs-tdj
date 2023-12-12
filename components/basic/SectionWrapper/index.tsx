import React from "react";

const SectionWrapper = (Component: () => JSX.Element, idName: string) =>
  function HigherOrderComponent() {
    return (
      <section className="container">
        <span id={idName}></span>
        <Component />
      </section>
    );
  };

export default SectionWrapper;
