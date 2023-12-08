import React from "react";
import { Metadata } from "next";
import "@styles/globals.css";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      {/* <head>
          <link rel="icon" href="/assets/images/logo.png" />
        </head> */}
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <div className="app">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
