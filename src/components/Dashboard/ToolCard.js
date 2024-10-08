import React from "react";
import { Link } from "react-router-dom";
import "./ToolCard.css";

const ToolCard = ({ title, description, link }) => {
  return (
    <Link to={link} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="tool-card">
        <h2>{title}</h2>
        <p>{description}</p>
        {/* Add content or components for the image upload tool here */}
      </div>
    </Link>
  );
};

export default ToolCard;
