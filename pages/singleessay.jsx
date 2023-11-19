import React from 'react'
import DashboardHeading from '../components/DashboardHeading'
import ProfileHeading from '../components/ProfileHeading'
import SingleEssay from '../components/dashboard/SingleEssay'

const SingleEssayPage = () => {
  return (
    <div className='h-screen'>
       <ProfileHeading />
        <div className='flex w-4/6 mx-auto h-[90%]'>
            <SingleEssay />
        </div>
    </div>
  )
}

export default SingleEssayPage