import React from 'react'
import DashboardHeading from '../components/DashboardHeading'
import Sidebar from '../components/dashboard/Sidebar'
import MainDashboard from '../components/dashboard/MainDashboard'
import ProfileHeading from '../components/ProfileHeading'

const HomePage = () => {
  return (
    <div className='h-screen'>
       <ProfileHeading />
        <div className='flex w-4/6 mx-auto h-[90%]'>
            {/* <Sidebar /> */}
            <MainDashboard />
        </div>
    </div>
  )
}

export default HomePage