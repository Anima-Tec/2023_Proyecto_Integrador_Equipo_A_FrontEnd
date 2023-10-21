import "./AccessButton.css";
import React, { useState } from "react";
const AccessButton = (props: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const divStyle = {
    boxShadow: isHovered
      ? "0px 0.1em 0.2em " +
        props.color +
        ", 0px 0.4em 0.7em -0.1em " +
        props.color +
        ", inset 0px -0.1em 0px #3c4fe0"
      : "none",
    width: props.width,
  };
  return (
    <input
      type="submit"
      value={props.text}
      className="access-button"
      style={divStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    />
  );
};
export default AccessButton;
