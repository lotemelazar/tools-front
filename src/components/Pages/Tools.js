import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import HighlightTool from "../Tools/HighlightedText";
import ImageUploadTool from "../Tools/ImageUploadTool";
import "./Tools.css";

function Tools() {
  return (
    <div className="tools-Page">
      <Sidebar />
      <div className="tools-layout-container">
        <ImageUploadTool />
        <HighlightTool />
      </div>
    </div>
  );
}

export default Tools;
