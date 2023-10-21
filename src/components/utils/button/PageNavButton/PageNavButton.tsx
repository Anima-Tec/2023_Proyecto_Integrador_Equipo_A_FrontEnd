/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const PageNavButton = (props: any) => {
  return (
    <Link to={props.page}>
      <input type="button" className={props.className} value={props.value} />
    </Link>
  );
};

export default PageNavButton;
