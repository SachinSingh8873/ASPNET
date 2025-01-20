import React from "react";
import "./Dashboard.css"; // Optional: Add your CSS file for styling

const Dashboard = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="dashboard-sidebar">
        <ul>
          <li>Overview</li>
          <li>Analytics</li>
          <li>Settings</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="dashboard-content">
        <h2>Welcome to the Dashboard</h2>
        <p>This is the main content area where you can display widgets, charts, or data.</p>
      </main>
    </div>
  );
};

export default Dashboard;
