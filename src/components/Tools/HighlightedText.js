import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy, faTrash } from "@fortawesome/free-solid-svg-icons";

function HighlightTool() {
  const [text, setText] = useState("");
  const [customWords, setCustomWords] = useState([]);
  const [highlightedText, setHighlightedText] = useState("");

  const handleSubmit = async () => {
    const response = await fetch(
      process.env.REACT_APP_API_URL + "/process-article",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, customWords }),
      }
    );
    const data = await response.json();
    const formattedText = data.highlightedText.replace(/\n/g, "<br>");
    setHighlightedText(formattedText);
  };

  const handleCopyInput = () => {
    navigator.clipboard.writeText(text);
  };

  const handleClearInput = () => {
    setText("");
    setHighlightedText("");
  };

  return (
    <div className="page-container">
      <div className="hightlight-container d-flex justify-content-center align-items-center ">
        <div
          className="container mt-0"
          style={{ width: "100%", padding: "2px" }}>
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title">Article Highlighter</h3>
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  gap: "10px",
                }}>
                <button
                  className="btn btn-light btn-sm"
                  onClick={handleCopyInput}
                  title="Copy Text"
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f8f9fa",
                  }}>
                  <FontAwesomeIcon icon={faCopy} />
                </button>
                <button
                  className="btn btn-light btn-sm"
                  onClick={handleClearInput}
                  title="Clear Text"
                  style={{
                    border: "1px solid #ced4da",
                    borderRadius: "0.25rem",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                    backgroundColor: "#f8f9fa",
                  }}>
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </div>
              <div className="position-relative">
                <textarea
                  className="form-control mb-3"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  rows="10"
                  placeholder="Paste your article here"
                  style={{ paddingRight: "60px" }} // Extra padding for the buttons
                />
              </div>
              <button className="btn btn-primary mb-3" onClick={handleSubmit}>
                Submit
              </button>
              <div
                className="form-control"
                style={{
                  height: "250px",
                  overflowY: "scroll",
                  whiteSpace: "pre-wrap",
                }}>
                <div dangerouslySetInnerHTML={{ __html: highlightedText }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HighlightTool;
