import React from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default OverviewLayout;
