import React from "react";
import { Link } from "react-router-dom";
import "./Community.css";
const Community = (props: any) => {
  const image = props.image;
  const name = props.name;
  const id = props.communityId;
  const imageStyle: React.CSSProperties = {
    backgroundImage: `url(${image})`,
  };
  return (
    <div style={imageStyle} className="community">
      <Link to={`/communities/${id}`}>{name}</Link>
    </div>
  );
};

export default Community;
