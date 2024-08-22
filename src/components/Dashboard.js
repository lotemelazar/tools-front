// import React from "react";
// import Sidebar from "./Sidebar";
// import ImageUploadTool from "./ImageUploadTool";
// import "./Dashboard.css";

// function Dashboard() {
//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <main className="main-content">
//         <header className="main-header d-flex justify-content-between align-items-center">
//           <h1>Dashboard</h1>
//         </header>
//         <section className="tool-section">
//           <div className="card">
//             <div className="card-body">
//               <ImageUploadTool />
//             </div>
//           </div>
//         </section>
//         {/* Add more tool sections here */}
//       </main>
//     </div>
//   );
// }

// export default Dashboard;

// this is how i want the dashboard
import React from "react";
import "./newDas.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <h2>Image Upload Tool</h2>
            <p>Upload and optimize images.</p>
            {/* Add content or components for the image upload tool here */}
          </div>
          {/* Add more cards for other tools or sections */}
          <div className="dashboard-card">
            <h2>Analytics</h2>
            <p>View your content performance metrics.</p>
            {/* Placeholder for analytics content */}
          </div>
          <div className="dashboard-card">
            <h2>Settings</h2>
            <p>Configure your preferences and account details.</p>
            {/* Placeholder for settings content */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
