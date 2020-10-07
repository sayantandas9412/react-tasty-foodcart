import React from "react";
import "./Backdrop.styles.scss";
import { withRouter } from "react-router-dom";

const Backdrop = ({ history }) => {
  return <div className="backdrop" onClick={() => history.push("/")}></div>;
};

export default withRouter(Backdrop);
