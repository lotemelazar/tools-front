import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<PrivateRoute />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </Router>
  );
}

function PrivateRoute() {
  return localStorage.getItem("token") ? (
    <Dashboard />
  ) : (
    <Navigate replace to="/login" />
  );
}

export default App;
