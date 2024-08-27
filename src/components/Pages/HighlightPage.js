import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import HighlightTool from "../Tools/HighlightedText";

function HighlightToolPage() {
  return (
    <div className="HighlightTool-Page">
      <Sidebar />
      <div className="tools-layout-container">
        <HighlightTool />
      </div>
    </div>
  );
}

export default HighlightToolPage;
