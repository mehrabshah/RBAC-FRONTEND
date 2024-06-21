// src/Routing.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import AdminLayout from "./Layout/AdminLayout";
import DoctorLayout from "./Layout/DoctorLayout";
import PatientLayout from "./Layout/PatientLayout";
import Admin from "./pages/Admin/Admin";
import Doctor from "./pages/Doctor/Doctor";
import Patient from "./pages/Patient/Patient";
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
          <Route path="/admin" element={<Admin />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <PatientLayout></PatientLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/patient" element={<Patient />} />
        </Route>
        <Route
          element={
            <ProtectedRoute>
              <DoctorLayout></DoctorLayout>
            </ProtectedRoute>
          }
        >
          <Route path="/doctor" element={<Doctor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
