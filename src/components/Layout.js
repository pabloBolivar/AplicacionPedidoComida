import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  return (
    <React.Fragment>
      <Header />

      <div className="central-component">{props.children}</div>

      <Footer />
    </React.Fragment>
  );
}
