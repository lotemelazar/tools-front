import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashborad/Dashboard";
import PrivateRoute from "./routes/PrivateRoute";
import Login from "./components/Login/Login";
import Tools from "./components/Sidebar/Tools";
import Help from "./components/Sidebar/Help";
import Settings from "./components/Sidebar/Settings";
import ImageUploadTool from "./components/Tools/ImageUploadTool";
import HighlightTool from "./components/Tools/HighlightedText";
import "./styles/App.css";

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
            path="/image-tool"
            element={
              <PrivateRoute>
                <ImageUploadTool />
              </PrivateRoute>
            }
          />
          <Route
            path="/highlights-glossary-tool"
            element={
              <PrivateRoute>
                <HighlightTool />
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
