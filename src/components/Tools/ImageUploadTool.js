import React, { useState } from "react";
import { BiBluetooth } from "react-icons/bi";

function ImageUploadTool() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploadResult, setUploadResult] = useState(null);

  // Handle file input change
  const handleFileChange = (event) => {
    setSelectedFiles((prevFiles) => [
      ...prevFiles,
      ...Array.from(event.target.files),
    ]);
  };

  // Handle folder input change
  const handleFolderChange = (event) => {
    setSelectedFiles((prevFiles) => [
      ...prevFiles,
      ...Array.from(event.target.files),
    ]);
  };

  // Handle upload button click
  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      alert("Please select at least one file or folder!");
      return;
    }

    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append("images", file);
    });

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: {
          "x-auth-token": token,
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Image upload failed");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "optimized-images.zip";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setUploadResult("Images uploaded and downloaded successfully!");
      setSelectedFiles([]); // Clear the selected files after upload
    } catch (error) {
      console.error("Error uploading images:", error);
      setUploadResult("Error uploading images");
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="card mt-0"
        style={{
          width: "75%",
        }}>
        <div className="card-body">
          <div className="image-upload-tool">
            <h2 className="mb-4">Image Upload Tool</h2>
            <div className="mb-3">
              <label>Select Files:</label>
              <input
                type="file"
                className="form-control"
                onChange={handleFileChange}
                multiple
              />
            </div>
            <div className="mb-3">
              <label>Select Folder:</label>
              <input
                type="file"
                className="form-control"
                onChange={handleFolderChange}
                multiple
                webkitdirectory="true"
              />
            </div>
            <button onClick={handleUpload} className="btn btn-success w-100">
              Upload and Download
            </button>
            {uploadResult && <p className="mt-3">{uploadResult}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageUploadTool;
