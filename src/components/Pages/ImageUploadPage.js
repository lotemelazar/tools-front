import React from "react";
import Sidebar from "../Sidebar/Sidebar";

import ImageUploadTool from "../Tools/ImageUploadTool";

function ImageUploadToolPage() {
  return (
    <div className="ImageUploadTool-Page">
      <Sidebar />
      <div className="tools-layout-container">
        <ImageUploadTool />
      </div>
    </div>
  );
}

export default ImageUploadToolPage;
