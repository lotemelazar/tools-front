import React from "react";
// import "./Dashboard.css";
import "./newDas.css";

import ToolCard from "./ToolCard";
import Sidebar from "../Sidebar/Sidebar";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-container mt-5">
        <div className="dashboard-header">
          <h1>Dashboard</h1>
        </div>
        <div className="dashboard-content">
          <div className="tool-card-container">
            <ToolCard
              title={"Image Upload Tool"}
              description={"Upload and optimize images."}
              link={"/image-tool"}
            />
            <ToolCard
              title={"Highlight Glossary"}
              description={"Highlights the glossary words in the article."}
              link={"/highlights-glossary-tool"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
