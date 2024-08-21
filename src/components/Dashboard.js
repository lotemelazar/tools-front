import React from "react";
import ImageUploadTool from "./ImageUploadTool";

function Dashboard() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Dashboard</h1>
      <div className="shadow p-3 mb-5 bg-body-tertiary rounded">
        <ImageUploadTool />
      </div>
    </div>
  );
}

export default Dashboard;
