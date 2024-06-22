import React from 'react'
import {useDoctorProfile} from "../../hooks/useDoctorProfile"

function DoctorDashboard() {
   const { isLoading, error } = useDoctorProfile()


  return (
    <div>DoctorDashboard</div>
  )
}

export default DoctorDashboard