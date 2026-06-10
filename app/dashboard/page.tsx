import React from 'react'
import DashboardHero from './sections/DashboardHero'
import DashboardOptions from './sections/DashboardOptions'
import QuickActions from './sections/QuickActions'
import ProtectedRoute from '../Components/ProtectedRoute'


export default function page() {
  return (
    <>
    {/* <ProtectedRoute> */}
    <DashboardHero/>
    <DashboardOptions/>
    <QuickActions/>
    {/* </ProtectedRoute> */}
    </>
  )
}
