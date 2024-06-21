// src/Routing.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AdminLayout from "./Layout/AdminLayout";
import DoctorLayout from "./Layout/DoctorLayout";
import PatientLayout from "./Layout/PatientLayout";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard"
import DoctorSetting from "./pages/Doctor/DoctorSetting" 
import PatientDashboard from "./pages/Patient/PatientDashboard"
import PatientSetting from "./pages/Patient/PatientSetting"
import AdminDashboard from "./pages/Admin/AdminDashboard"
import AdminSetting from "./pages/Admin/AdminSetting"
import ProtectedRoute from "./components/shared/ProtectedRoute";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout></AdminLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/settings" element={<AdminSetting/>} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <PatientLayout></PatientLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/patient/dashboard" element={<PatientDashboard />} />
          <Route path="/patient/settings" element={<PatientSetting/>} />

        </Route>
        <Route
          element={
            <ProtectedRoute>
              <DoctorLayout></DoctorLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/doctor/dashboard" element={< DoctorDashboard/>} />
          <Route path="/doctor/settings" element={<DoctorSetting/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
