import React from 'react';
import { Link } from 'react-router-dom';

const PatientLayout = ({ children }) => {
  return (
    <div className="patient-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/patient/dashboard">Dashboard</Link></li>
            <li><Link to="/patient/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default PatientLayout;
