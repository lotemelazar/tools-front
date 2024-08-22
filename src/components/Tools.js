import React from "react";
import Sidebar from "./Sidebar";
import ImageUploadTool from "./ImageUploadTool";
import HighlightedText from "./HighlightedText";
import "./Tools.css";

function Tools() {
  return (
    <div className="tools-container">
      <Sidebar />
      <main className="main-content">
        <header className="main-header d-flex justify-content-between align-items-center">
          <h1>Tools</h1>
        </header>
        <section className="tool-section">
          <div className="card">
            <div className="card-body">
              <ImageUploadTool />
            </div>
          </div>
        </section>
        {/* Add more tool sections here */}
        <div className="card">
          <div className="card-body">
            <HighlightedText />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tools;
