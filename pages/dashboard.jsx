import React from 'react'
import DashboardHeading from '../components/DashboardHeading'
import Sidebar from '../components/dashboard/Sidebar'
import MainDashboard from '../components/dashboard/MainDashboard'

const DashboardPage = () => {
  return (
    <div className='h-screen'>
        <DashboardHeading />
        <div className='flex w-full h-[90%]'>
            <Sidebar />
            <MainDashboard />
        </div>
    </div>
  )
}

export default DashboardPage