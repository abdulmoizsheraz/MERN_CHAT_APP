import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
const ProtectedRoute = ({children,user,redirect="/login"}) => {
  return (
    user ? (
      <>{children}</>
    ) : (
      <Navigate to={redirect} replace/>
    )
  )
}

export default ProtectedRoute