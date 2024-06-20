import React from 'react';
import { Link } from 'react-router-dom';

const DoctorLayout = ({ children }) => {
  return (
    <div className="doctor-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/doctor/dashboard">Dashboard</Link></li>
            <li><Link to="/doctor/schedule">Schedule</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
        {children}
      </main>
    </div>
  );
};

export default DoctorLayout;
