// this is how i want the dashboard
import React from "react";
import "./Dashboard.css";
import ToolCard from "./ToolCard";
import { Link, useNavigate } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard-container mt-5">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-grid">
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
  );
}

export default Dashboard;

// import React from "react";
// import "./Dashboard.css";
// import ToolCard from "./ToolCard"; // This will be a new component for the cards

// const tools = [
//   {
//     title: "Image Upload Tool",
//     description: "Upload and manage your images efficiently.",
//     link: "/image-upload",
//   },
//   {
//     title: "Word Highlighting Tool",
//     description: "Highlight specific words in your articles.",
//     link: "/highlight-text",
//   },
//   // Add more tools as needed
// ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard">
//       <div className="container">
//         <div className="row">
//           {tools.map((tool, index) => (
//             <div key={index} className="col-md-4">
//               <ToolCard
//                 title={tool.title}
//                 description={tool.description}
//                 link={tool.link}
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
