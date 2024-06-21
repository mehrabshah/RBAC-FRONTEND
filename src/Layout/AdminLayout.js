import React from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <nav>
          <ul>
            <li><Link to="/admin/dashboard">Dashboard</Link></li>
            <li><Link to="/admin/settings">Settings</Link></li>
          </ul>
        </nav>
      </aside>
      <main className="content">
         <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
