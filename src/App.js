// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
// } from "react-router-dom";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import Tools from "./components/Tools";
// import PrivateRoute from "./components/PrivateRoute";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/dashboard"
//           element={
//             <PrivateRoute>
//               {/* <Dashboard /> */}
//               <Tools />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

///////

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./components/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import Login from "./components/Login";
// import Tools from "./components/Tools";
// import Help from "./components/Help";
// import Settings from "./components/Settings";
// import "./styles.css";

// function App() {
//   return (
//     <Router>
//       <div className="app-container">
//         <Sidebar /> {/* Sidebar stays fixed */}
//         <div className="main-content">
//           <Routes>
//             <Route
//               path="/dashboard"
//               element={
//                 <PrivateRoute>
//                   <Dashboard />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/tools"
//               element={
//                 <PrivateRoute>
//                   <Tools />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/help"
//               element={
//                 <PrivateRoute>
//                   <Help />
//                 </PrivateRoute>
//               }
//             />
//             <Route
//               path="/settings"
//               element={
//                 <PrivateRoute>
//                   <Settings />
//                 </PrivateRoute>
//               }
//             />
//             <Route path="/login" element={<Login />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import Tools from "./components/Tools";
import Help from "./components/Help";
import Settings from "./components/Settings";
import "./styles.css";

function AppLayout() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="app-container">
      {!isLoginPage && <Sidebar />}{" "}
      {/* Sidebar is not rendered on the login page */}
      <div className={`main-content ${!isLoginPage ? "with-sidebar" : ""}`}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/tools"
            element={
              <PrivateRoute>
                <Tools />
              </PrivateRoute>
            }
          />
          <Route
            path="/help"
            element={
              <PrivateRoute>
                <Help />
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute>
                <Settings />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
