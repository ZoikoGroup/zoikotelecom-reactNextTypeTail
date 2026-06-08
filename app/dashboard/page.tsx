import React from 'react'
import EditProfile from './sections/EditProfile'
import ProtectedRoute from '../Components/ProtectedRoute'

export default function page() {
  return (
    <>
      {/* <ProtectedRoute> */}
      <EditProfile />
      {/* </ProtectedRoute> */}
    </>
  )
}
