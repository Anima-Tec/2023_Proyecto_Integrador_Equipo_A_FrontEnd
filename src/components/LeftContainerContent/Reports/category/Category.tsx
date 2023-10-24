import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
const Category = (props: any) => {
  const communityId = props.communityId;
  return (
    <>
      <div className="category-container">
        <Link className="category" to={`/communities/${communityId}`}>
          <span>Repor</span>ts
        </Link>

        <Link className="category" to={`/communities/${communityId}`}>
          <span>My repor</span>ts
        </Link>

        <Link className="category" to={`/communities/${communityId}`}>
          <span>Reports Hi</span>story
        </Link>

        <Link className="category" to={`/communities/${communityId}/new`}>
          <span>Create Rep</span>ort
        </Link>
      </div>
    </>
  );
};

export default Category;
