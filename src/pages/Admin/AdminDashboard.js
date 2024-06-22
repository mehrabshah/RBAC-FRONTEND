import React from 'react'
import {useAdminProfile} from "../../hooks/useAdminProfile"

function AdminDashboard() {
  const { isLoading, error  } = useAdminProfile() 

  return (
    <div>AdminDashboard</div>
  )
}

export default AdminDashboard