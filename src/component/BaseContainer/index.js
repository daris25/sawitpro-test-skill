import React from "react";
import "./styles.css";

function MainLanding(props) {
  return <div className="container">{props.children}</div>;
}

export default MainLanding;
