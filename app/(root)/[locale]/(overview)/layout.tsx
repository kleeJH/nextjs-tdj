import React from "react";

import Footer from "@components/Footer";
import Navigation from "@components/Navigation";

const OverviewLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full h-full bg-background">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default OverviewLayout;
