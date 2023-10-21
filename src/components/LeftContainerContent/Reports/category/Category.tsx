import React from "react";
import "./Category.css";
import { Link } from "react-router-dom";
const Category = (props: any) => {
  return (
    <>
      <div className="category-container">
        <Link className="category" to="/reports">
          <span>Repor</span>ts
        </Link>

        <Link className="category" to="/">
          <span>My repor</span>ts
        </Link>

        <Link className="category" to="/">
          <span>Reports Hi</span>story
        </Link>

        <Link className="category" to="/reports/new">
          <span>Create Rep</span>ort
        </Link>
      </div>
    </>
  );
};

export default Category;
